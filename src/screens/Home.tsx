import {
  Dimensions,
  ImageBackground,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import React from 'react';
import Constants from '../Constants/AppConstant';
import AppConstant from '../Constants/AppConstant';
import FocusSection from '../components/FocusSection';
import NetworkSection from '../components/NetworkSection';
import {ScreenProps} from '../types/Application';

const Home: React.FC<ScreenProps> = props => {
  //const isDarkMode = useColorScheme() === 'dark';

  const animationsCosntants = (event: any) => {
    const layout = event.nativeEvent.layout;

    let yDistance =
      Dimensions.get('screen').height / 2 - (layout.height / 2 + layout.y);
    yDistance = StatusBar.currentHeight
      ? yDistance - StatusBar.currentHeight
      : yDistance;
    Constants.Animations.screens.musicControl.onUnmount.translate.Y.toValue =
      -yDistance;
    Constants.Animations.screens.musicControl.initial.translateYValue =
      -yDistance;
    Constants.Animations.screens.networkControl.onUnmount.translate.Y.toValue =
      -yDistance;
    Constants.Animations.screens.networkControl.initial.translateYValue =
      -yDistance;
    const xDistance = layout.width / 4;
    Constants.Animations.screens.musicControl.onUnmount.translate.X.toValue =
      xDistance;
    Constants.Animations.screens.musicControl.initial.translateXValue =
      xDistance;
    Constants.Animations.screens.networkControl.onUnmount.translate.X.toValue =
      -xDistance;
    Constants.Animations.screens.networkControl.initial.translateXValue =
      -xDistance;
  };

  const onLongPressNetworkControlSection = () => {
    const {Application, componentId} = props;
    Application.navigateNetworkControl(componentId);
  };

  return (
    <ImageBackground
      style={styles.backgroundImage}
      blurRadius={10}
      source={require('../assets/images/backgroundImage2.jpeg')}>
      <View style={styles.wrapperStyle}>
        <View
          style={[styles.row, styles.background]}
          onLayout={animationsCosntants}>
          <NetworkSection
            externalStyles={styles.flex}
            onLongPressNetworkControlSection={onLongPressNetworkControlSection}
          />
          <FocusSection externalStyles={styles.flex} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  wrapperStyle: {
    padding: 20, // TODO: make it responsible, depends on width
    flex: 1,
    justifyContent: 'flex-end',
  },
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  background: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: AppConstant.Borders.radius,
  },
});

export default Home;
