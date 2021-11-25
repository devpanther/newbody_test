import React from 'react';
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import AppConstant from '../../Constants/AppConstant';
import ButtonRectangled from '../Buttons/Rectangle';
import ButtonSquared from '../Buttons/Squared';
import FocusButtons from './FocusButtons';
import MirrorButtons from './MirrorButtons';

const FocusSection: React.FC<{
  externalStyles: any;
}> = ({externalStyles}) => {
  let animatedScale = new Animated.Value(
    AppConstant.Animations.sections.default.initialValue,
  );

  const handlePressIn = () => {
    Animated.spring(animatedScale, {
      toValue: AppConstant.Animations.sections.default.pressIn.toValue,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animatedScale, {
      toValue: AppConstant.Animations.sections.default.pressOut.toValue,
      friction: AppConstant.Animations.sections.default.pressOut.friction,
      tension: AppConstant.Animations.sections.default.pressOut.tension,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {transform: [{scale: animatedScale}]};
  return (
    <TouchableWithoutFeedback
      {...externalStyles}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <Animated.View style={[styles.container, externalStyles, animatedStyle]}>
        <View style={styles.controls}>
          <ButtonRectangled icon={'moon-o'} text={'Focus'} />
          <ButtonRectangled icon={'sun-o'} text={'Keyboard\nBrightness'} />
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: AppConstant.AlignItemsCenter.alignItems,
    justifyContent: AppConstant.JustifyContentCenter.justifyContent,
    aspectRatio: 1,
    flex: 1,
  },
  flex: {flex: 1},
  controls: {
    justifyContent: 'space-around',
    display: AppConstant.Row.display,
  },
});

export default FocusSection;
