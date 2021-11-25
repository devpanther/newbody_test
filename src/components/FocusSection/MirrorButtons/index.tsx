import React from 'react';
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import AppConstant from '../../../Constants/AppConstant';
Icon.loadFont();

const MirrorButtons: React.FC<{
  title: string;
  subtitle: string;
  icon: string;
}> = ({title, icon}) => {
  const [iconClicked, setClicked] = React.useState(false);

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
    setClicked(!iconClicked);
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={() => setFocused(true)}
      onPressOut={() => setFocused(false)}>
      <View style={styles.row}>
        <View style={styles.text}>
          <Pressable
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={[styles.centerIcon]}>
            <Icon
              style={[
                styles.icon,
                {
                  color: iconClicked
                    ? AppConstant.Colors.sections.selected.color
                    : AppConstant.Colors.sections.unselected.color,
                },
              ]}
              name={icon}
            />
          </Pressable>
          <Text style={styles.mainText}>{title}</Text>
        </View>
        <View style={styles.text}>
          <Pressable
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={[styles.centerIcon]}>
            <Icon
              style={[
                styles.icon,
                {
                  color: iconClicked
                    ? AppConstant.Colors.sections.selected.color
                    : AppConstant.Colors.sections.unselected.color,
                },
              ]}
              name={icon}
            />
          </Pressable>
          <Text style={styles.mainText}>{title}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  icon: {
    fontSize: AppConstant.Sizes.icon.musicControlSection.wards,
  },
  text: {
    width: 'auto',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: AppConstant.Borders.radius,
    marginRight: AppConstant.Indents.sm,
  },
  forwardIcon: {
    color: AppConstant.Colors.sections.networkcontrol.icons.forward,
    fontSize: AppConstant.Sizes.icon.musicControlSection.wards,
  },
  row: {
    marginTop: AppConstant.Indents.sm,
    display: AppConstant.Row.display,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: AppConstant.JustifyContentCenter.justifyContent,
    flex: 1,
  },
  centerIcon: {
    display: AppConstant.Row.display,
    flexDirection: 'column',
    justifyContent: AppConstant.JustifyContentCenter.justifyContent,
    alignItems: AppConstant.AlignItemsCenter.alignItems,
    padding: 5,
    borderRadius: 150,
    height: 40,
    width: 40,
    marginTop: 7,
    marginLeft: 15,
    marginRight: 15,
  },
  centerIconForward: {
    justifyContent: AppConstant.JustifyContentCenter.justifyContent,
    alignItems: AppConstant.AlignItemsCenter.alignItems,
    padding: 6,
    borderRadius: 150,
    position: 'absolute',
    right: -10,
    top: '40%',
  },
  mainText: {
    marginLeft: 15,
    marginRight: 15,
    fontSize: 12,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default MirrorButtons;
