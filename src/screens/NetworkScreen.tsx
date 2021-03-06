import React from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import {ScreenProps} from '../types/Application.d';

import ButtonRoundedWithCaption from '../components/Buttons/ButtonRoundedWithCaption';
import Theme from '../Constants/AppConstant';
import AppConstant from '../Constants/AppConstant';

export default class NetworkControlScreen extends React.Component<ScreenProps> {
  animatedScaleValue: Animated.Value | Animated.ValueXY;
  animatedTranslateYValue: Animated.Value | Animated.ValueXY;
  animatedTranslateXValue: Animated.Value | Animated.ValueXY;
  animatedBackgroundOpacityValue: Animated.Value | Animated.ValueXY;
  animatedContainerOpacityValue: Animated.Value | Animated.ValueXY;

  constructor(props: any) {
    super(props);
    this.animatedScaleValue = new Animated.Value(
      Theme.Animations.screens.networkControl.initial.scaleValue,
    );
    this.animatedTranslateYValue = new Animated.Value(
      Theme.Animations.screens.networkControl.initial.translateYValue,
    );
    this.animatedTranslateXValue = new Animated.Value(
      Theme.Animations.screens.networkControl.initial.translateXValue,
    );
    this.animatedBackgroundOpacityValue = new Animated.Value(
      Theme.Animations.screens.networkControl.initial.backgroundOpacityValue,
    );
    this.animatedContainerOpacityValue = new Animated.Value(
      Theme.Animations.screens.networkControl.initial.containerOpacityValue,
    );
  }

  onDismiss = () => {
    const {Application, componentId} = this.props;
    Animated.parallel([
      Animated.timing(this.animatedContainerOpacityValue, {
        toValue:
          Theme.Animations.screens.networkControl.onUnmount.opacity.container
            .toValue,
        duration:
          Theme.Animations.screens.networkControl.onUnmount.opacity.container
            .duration,
        useNativeDriver: true,
      }),
      Animated.timing(this.animatedTranslateYValue, {
        toValue:
          Theme.Animations.screens.networkControl.onUnmount.translate.Y.toValue,
        duration:
          Theme.Animations.screens.networkControl.onUnmount.translate.Y
            .duration,
        useNativeDriver: true,
      }),
      Animated.timing(this.animatedTranslateXValue, {
        toValue:
          Theme.Animations.screens.networkControl.onUnmount.translate.X.toValue,
        duration:
          Theme.Animations.screens.networkControl.onUnmount.translate.X
            .duration,
        useNativeDriver: true,
      }),
      Animated.timing(this.animatedScaleValue, {
        toValue:
          Theme.Animations.screens.networkControl.onUnmount.scale.toValue,
        duration:
          Theme.Animations.screens.networkControl.onUnmount.scale.duration,
        useNativeDriver: true,
      }),
      Animated.timing(this.animatedBackgroundOpacityValue, {
        toValue:
          Theme.Animations.screens.networkControl.onUnmount.opacity.background
            .toValue,
        duration:
          Theme.Animations.screens.networkControl.onUnmount.opacity.background
            .duration,
        useNativeDriver: true,
      }),
    ]).start(() => {
      Application.navigateDismissOverlay(componentId);
    });
  };

  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.animatedContainerOpacityValue, {
        toValue:
          Theme.Animations.screens.networkControl.onMount.opacity.container
            .toValue,
        duration:
          Theme.Animations.screens.networkControl.onMount.opacity.container
            .duration,
        useNativeDriver: true,
      }),
      Animated.timing(this.animatedTranslateYValue, {
        toValue:
          Theme.Animations.screens.networkControl.onMount.translate.Y.toValue,
        duration:
          Theme.Animations.screens.networkControl.onMount.translate.Y.duration,
        useNativeDriver: true,
      }),
      Animated.timing(this.animatedTranslateXValue, {
        toValue:
          Theme.Animations.screens.networkControl.onMount.translate.X.toValue,
        duration:
          Theme.Animations.screens.networkControl.onMount.translate.X.duration,
        useNativeDriver: true,
      }),
      Animated.timing(this.animatedScaleValue, {
        toValue: Theme.Animations.screens.networkControl.onMount.scale.toValue,
        duration:
          Theme.Animations.screens.networkControl.onMount.scale.duration,
        useNativeDriver: true,
      }),
      Animated.timing(this.animatedBackgroundOpacityValue, {
        toValue:
          Theme.Animations.screens.networkControl.onMount.opacity.background
            .toValue,
        duration:
          Theme.Animations.screens.networkControl.onMount.opacity.background
            .duration,
        useNativeDriver: true,
      }),
    ]).start();
  }

  render() {
    const animatedStyle = {
      transform: [
        {
          translateY: this.animatedTranslateYValue,
        },
        {
          translateX: this.animatedTranslateXValue,
        },
        {
          scale: this.animatedScaleValue,
        },
      ],
      opacity: this.animatedContainerOpacityValue,
    };

    return (
      <TouchableWithoutFeedback onPress={this.onDismiss}>
        <View style={styles.wrapper}>
          <Animated.Image
            style={[styles.backgroundImage]}
            blurRadius={10}
            source={require('../assets/images/backgroundImage2.jpeg')}
          />
          <TouchableWithoutFeedback>
            <Animated.View style={[styles.container, animatedStyle]}>
              <View style={styles.row}>
                <ButtonRoundedWithCaption
                  icon={'plane'}
                  text={'Plane mode'}
                  colorEnabledButton={
                    Theme.Colors.buttons.custom.rounded.plane.enabledBackground
                  }
                />
                <ButtonRoundedWithCaption
                  icon={'signal'}
                  text={'Mobile network'}
                  colorEnabledButton={
                    Theme.Colors.buttons.custom.rounded.mobileData
                      .enabledBackground
                  }
                  initiallyEnabled
                />
              </View>
              <View style={styles.row}>
                <ButtonRoundedWithCaption
                  icon={'wifi'}
                  text={'Wi-Fi'}
                  colorDisabledButton={
                    Theme.Colors.buttons.custom.rounded.wifi_bluetooth
                      .disabledBackground
                  }
                  colorDisabledIcon={
                    Theme.Colors.buttons.custom.rounded.wifi_bluetooth
                      .disabledIcon
                  }
                  initiallyEnabled
                />
                <ButtonRoundedWithCaption
                  icon={'bluetooth-b'}
                  text={'Bluetooth'}
                  iconSize={Theme.Sizes.icon.custom.bluetooth}
                  colorDisabledButton={
                    Theme.Colors.buttons.custom.rounded.wifi_bluetooth
                      .disabledBackground
                  }
                  colorDisabledIcon={
                    Theme.Colors.buttons.custom.rounded.wifi_bluetooth
                      .disabledIcon
                  }
                  initiallyEnabled
                />
              </View>
              <View
                style={[
                  styles.row,
                  {
                    justifyContent:
                      AppConstant.JustifyContentBetween.justifyContent,
                  },
                ]}>
                <ButtonRoundedWithCaption
                  icon={'retweet'}
                  text={'AirDrop'}
                  colorDisabledButton={
                    Theme.Colors.buttons.custom.rounded.wifi_bluetooth
                      .disabledBackground
                  }
                  colorDisabledIcon={
                    Theme.Colors.buttons.custom.rounded.wifi_bluetooth
                      .disabledIcon
                  }
                />
                <ButtonRoundedWithCaption
                  icon={'share'}
                  text={'HotSpot'}
                  iconSize={Theme.Sizes.icon.custom.bluetooth}
                  colorDisabledButton={
                    Theme.Colors.buttons.custom.rounded.wifi_bluetooth
                      .disabledBackground
                  }
                  colorDisabledIcon={
                    Theme.Colors.buttons.custom.rounded.wifi_bluetooth
                      .disabledIcon
                  }
                />
              </View>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: Theme.Dimensions.screenWidth,
    height: Theme.Dimensions.screenHeight,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: Theme.Indents.xxl,
    marginHorizontal: Theme.Indents.lg,
    padding: Theme.Indents.xl,
    backgroundColor: Theme.Colors.sections.default.backgroundColor,
    borderRadius: Theme.Borders.radius * 2,
  },
});
