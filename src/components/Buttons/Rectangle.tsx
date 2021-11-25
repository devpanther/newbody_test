import React from 'react';
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  Animated,
  GestureResponderEvent,
} from 'react-native';

import ButtonBase from './Buttons';
import AppConstant from '../../Constants/AppConstant';

export interface ButtonRectangledProps {
  icon: string;
  text: string;
  iconDisabled?: string;
  iconSize?: number;
  colorEnabledIcon?: string;
  colorEnabledButton?: string;
  colorDisabledIcon?: string;
  colorDisabledButton?: string;
  colorEnabledText?: string;
  colorDisabledText?: string;
  initiallyEnabled?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const ButtonRectangled: React.FC<ButtonRectangledProps> = props => {
  const animatedScaleValue = new Animated.Value(
    AppConstant.Animations.buttons.default.rectangled.initialValue,
  );
  const handlePressIn = () => {
    Animated.spring(animatedScaleValue, {
      toValue:
        AppConstant.Animations.buttons.default.rectangled.pressIn.toValue,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animatedScaleValue, {
      toValue:
        AppConstant.Animations.buttons.default.rectangled.pressOut.toValue,
      friction:
        AppConstant.Animations.buttons.default.rectangled.pressOut.friction,
      tension:
        AppConstant.Animations.buttons.default.rectangled.pressOut.tension,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {transform: [{scale: animatedScaleValue}]};

  return (
    <ButtonBase
      iconSize={AppConstant.Sizes.icon.rectangled}
      colorDisabledButton={
        AppConstant.Colors.buttons.default.rectangled.disabledBackground
      }
      colorEnabledButton={
        AppConstant.Colors.buttons.default.rectangled.enabledBackground
      }
      colorDisabledIcon={
        AppConstant.Colors.buttons.default.rectangled.disabledIcon
      }
      colorEnabledIcon={
        AppConstant.Colors.buttons.default.rectangled.enabledIcon
      }
      colorDisabledText={
        AppConstant.Colors.buttons.default.rectangled.disabledText
      }
      colorEnabledText={
        AppConstant.Colors.buttons.default.rectangled.enabledText
      }
      {...props}
      style={[styles.rectangledButton, props.style]}
      animatedStyle={animatedStyle}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    />
  );
};

const styles = StyleSheet.create({
  rectangledButton: {
    borderRadius: AppConstant.Borders.radius,
    aspectRatio: 2.25,
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: AppConstant.Indents.md,
  },
});

export default ButtonRectangled;
