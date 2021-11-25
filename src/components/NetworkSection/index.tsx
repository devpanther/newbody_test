import React from 'react';
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import AppConstant from '../../Constants/AppConstant';
import NetworkButtons from './NetworkButtons';

const NetworkSection: React.FC<{
  externalStyles: any;
  onLongPressNetworkControlSection: any;
}> = ({externalStyles, onLongPressNetworkControlSection}) => {
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
          <View>
            <NetworkButtons
              title="Wi-Fi"
              subtitle="Not Connected"
              icon="wifi"
              onLongPress={onLongPressNetworkControlSection}
            />
            <NetworkButtons
              title="Bluetooth"
              subtitle="Off"
              icon="bluetooth"
              onLongPress={onLongPressNetworkControlSection}
            />
            <NetworkButtons
              title="Airdrop"
              subtitle="Not Connected"
              icon="tint"
              onLongPress={onLongPressNetworkControlSection}
            />
          </View>
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
    margin: AppConstant.Indents.sm,
    padding: AppConstant.Indents.sm,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: AppConstant.Borders.radius,
  },
  flex: {flex: 1},
  controls: {
    justifyContent: AppConstant.JustifyContentAround.justifyContent,
    display: AppConstant.Row.display,
  },
});

export default NetworkSection;
