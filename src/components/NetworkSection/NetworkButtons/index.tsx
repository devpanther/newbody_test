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

const NetworkButtons: React.FC<{
  title: string;
  subtitle: string;
  icon: string;
  onPress: any;
}> = ({title, subtitle, icon, onPress}) => {
  const [focused, setFocused] = React.useState(false);
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
      onPress={onPress}
      onPressOut={() => setFocused(false)}>
      <View style={styles.row}>
        <Pressable
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={[
            styles.centerIcon,
            {
              backgroundColor: iconClicked
                ? AppConstant.Colors.sections.selected.backgroundColor
                : AppConstant.Colors.sections.unselected.backgroundColor,
            },
          ]}>
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
        <View style={styles.text}>
          <Text style={styles.networkMainText}>{title}</Text>
          <Text style={styles.networkSubText}>{subtitle}</Text>
        </View>
        {focused && (
          <View style={styles.centerIconForward}>
            <Icon style={[styles.forwardIcon]} size={15} name={'angle-right'} />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  icon: {
    fontSize: AppConstant.Sizes.icon.musicControlSection.wards,
  },
  text: {
    marginLeft: 10,
    width: '60%',
  },
  forwardIcon: {
    color: AppConstant.Colors.sections.networkcontrol.icons.forward,
    fontSize: AppConstant.Sizes.icon.musicControlSection.wards,
  },
  row: {
    marginTop: AppConstant.Indents.sm,
    display: AppConstant.Row.display,
    flexDirection: 'row',
    alignItems: AppConstant.AlignItemsCenter.alignItems,
    justifyContent: 'flex-start',
    flex: 1,
  },
  centerIcon: {
    justifyContent: AppConstant.JustifyContentCenter.justifyContent,
    alignItems: AppConstant.AlignItemsCenter.alignItems,
    padding: 5,
    borderRadius: 150,
    height: 35,
    width: 35,
  },
  centerIconForward: {
    justifyContent: AppConstant.JustifyContentCenter.justifyContent,
    alignItems: AppConstant.AlignItemsCenter.alignItems,
    padding: 6,
    borderRadius: 150,
    position: 'absolute',
    right: -10,
  },
  networkMainText: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  networkSubText: {
    fontSize: 10,
    color: 'rgba(0, 0, 0, 0.5)',
  },
});

export default NetworkButtons;
