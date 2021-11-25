import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  Animated,
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import AppConstant from '../../Constants/AppConstant';

export interface ButtonBaseProps extends TouchableWithoutFeedbackProps {
  icon: string;
  iconDisabled?: string;
  iconSize?: number;
  text?: string;
  textStyle?: StyleProp<TextStyle>;
  colorEnabledIcon: string;
  colorEnabledButton: string;
  colorDisabledIcon: string;
  colorDisabledButton: string;
  colorEnabledText?: string;
  colorDisabledText?: string;
  initiallyEnabled?: boolean;
  animatedStyle?: any; // TODO: make proper interface
}

const ButtonBase: React.FC<ButtonBaseProps> = props => {
  const [isEnabled, setIsEnabled] = React.useState(
    props.initiallyEnabled ? props.initiallyEnabled : false,
  );

  const _onPress = (event: GestureResponderEvent) => {
    setIsEnabled(!isEnabled);
    props.onPress ? props.onPress(event) : null;
  };

  const {
    style,
    animatedStyle,
    icon,
    iconDisabled,
    iconSize = AppConstant.Sizes.icon.default,
    colorEnabledButton,
    colorEnabledIcon,
    colorDisabledButton,
    colorDisabledIcon,
    colorEnabledText,
    colorDisabledText,
    text,
    textStyle,
  } = props;

  const textColors = {
    enabled: colorEnabledText ? colorEnabledText : colorEnabledIcon,
    disabled: colorDisabledText ? colorDisabledText : colorDisabledIcon,
  };
  const _textStyle: StyleProp<TextStyle> = [
    styles.text,
    {
      width: AppConstant.Dimensions.screenWidth * 0.19,
      marginLeft: 9,
      fontWeight: 'bold',
    },
    {color: isEnabled ? textColors.enabled : textColors.disabled},
  ];

  return (
    <TouchableWithoutFeedback {...props} onPress={_onPress}>
      <Animated.View
        style={[
          styles.container,
          style,
          animatedStyle,
          {
            backgroundColor: isEnabled
              ? colorEnabledButton
              : colorDisabledButton,
          },
        ]}>
        <View style={styles.iconWrap}>
          <Icon
            name={isEnabled ? icon : iconDisabled ? iconDisabled : icon}
            size={iconSize}
            color={isEnabled ? colorEnabledIcon : colorDisabledIcon}
          />
        </View>
        {text ? <Text style={[_textStyle, textStyle]}>{text}</Text> : null}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
    flex: 1,
    margin: AppConstant.Indents.sm,
  },
  text: {
    textAlign: 'left',
    fontSize: AppConstant.Sizes.font.button.default,
    fontFamily: AppConstant.Fonts.primary,
    marginVertical: -AppConstant.Indents.sm,
  },
  iconWrap: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    padding: 5,
    borderRadius: 100,
    height: 37,
    width: 37,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ButtonBase;
