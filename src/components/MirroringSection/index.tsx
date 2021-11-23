import React from 'react';
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
Icon.loadFont();
import AppConstant from '../../Constants/AppConstant';

const MirroringSection: React.FC<{
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
        <View style={styles.flex} />
        <View style={styles.controls}>
          <Icon style={[styles.icon, styles.wards]} name={'backward'} />
          <Icon style={[styles.icon, styles.play]} name={'play'} />
          <Icon style={[styles.icon, styles.wards]} name={'forward'} />
        </View>
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
    padding: AppConstant.Indents.sm,
    backgroundColor: AppConstant.Colors.sections.default.background,
    borderRadius: AppConstant.Borders.radius,
  },
  flex: {flex: 1},
  controls: {
    justifyContent: 'space-around',
    display: 'flex',
  },
  icon: {
    margin: AppConstant.Indents.md,
  },
  play: {
    color: AppConstant.Colors.sections.musicControl.icons.play,
    fontSize: AppConstant.Sizes.icon.musicControlSection.play,
  },
  wards: {
    color: AppConstant.Colors.sections.musicControl.icons.wards,
    fontSize: AppConstant.Sizes.icon.musicControlSection.wards,
  },
});

export default MirroringSection;
