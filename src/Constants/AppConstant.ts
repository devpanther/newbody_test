import {Dimensions, Platform} from 'react-native';
import {TypeConstants} from '../types/Constants.d';

class Constants {
  readonly Dimensions: TypeConstants['Dimensions'] = {
    screenHeight: Dimensions.get('screen').height,
    screenWidth: Dimensions.get('screen').width,
  };

  readonly Fonts: TypeConstants['Fonts'] = {
    primary: Platform.OS === 'android' ? 'Roboto' : 'Arial',
    alternative: Platform.OS === 'android' ? 'normal' : 'Damascus',
  };

  readonly Indents: TypeConstants['Indents'] = {
    xxxl: 50,
    xxl: 24,
    xl: 20,
    lg: 20,
    md: 16,
    sm: 8,
    dynamic: {
      sliderControlIcon: 0.045 * this.Dimensions.screenWidth,
      buttonRoundedWithCaptionMargin: 0.07 * this.Dimensions.screenWidth,
    },
  };

  readonly Row: TypeConstants['Row'] = {
    display: 'flex',
  };

  readonly JustifyContentCenter: TypeConstants['JustifyContentCenter'] = {
    justifyContent: 'center',
  };

  readonly JustifyContentBetween: TypeConstants['JustifyContentBetween'] = {
    justifyContent: 'space-between',
  };

  readonly JustifyContentAround: TypeConstants['JustifyContentAround'] = {
    justifyContent: 'space-around',
  };

  readonly AlignItemsCenter: TypeConstants['AlignItemsCenter'] = {
    alignItems: 'center',
  };

  readonly AlignItemsBetween: TypeConstants['AlignItemsBetween'] = {
    alignItems: 'space-between',
  };

  readonly Borders: TypeConstants['Borders'] = {
    radius: 12,
    circle: 100,
  };

  readonly Sizes: TypeConstants['Sizes'] = {
    icon: {
      default: 0.06 * this.Dimensions.screenWidth,
      rounded: 0.048 * this.Dimensions.screenWidth,
      squared: 0.07 * this.Dimensions.screenWidth,
      rectangled: 0.05 * this.Dimensions.screenWidth,
      custom: {
        bluetooth: 0.064 * this.Dimensions.screenWidth,
      },
      musicControlSection: {
        play: 0.08 * this.Dimensions.screenWidth,
        wards: 0.045 * this.Dimensions.screenWidth,
      },
      sliderControl: 0.065 * this.Dimensions.screenWidth,
    },
    font: {
      button: {
        default: 0.036 * this.Dimensions.screenWidth,
      },
      songTitle: {
        firstLine: 12,
        secondLine: 16,
      },
    },
  };

  readonly Colors: TypeConstants['Colors'] = {
    transparent: 'rgba(0, 0, 0, 0)',
    semiWhite: 'rgba(255, 255, 255, 0.5)',
    buttons: {
      default: {
        squared: {
          disabledBackground: 'rgba(0, 0, 0, 0.2)',
          enabledBackground: 'rgba(255, 255, 255, 0.7)',
          disabledIcon: 'rgba(255, 255, 255, 0.8)',
          enabledIcon: '#027AFF',
        },
        rectangled: {
          disabledBackground: 'rgba(255, 255, 255, 0.3)',
          enabledBackground: 'rgba(0, 0, 0, 0.7)',
          disabledIcon: 'rgba(0, 0, 0, 0.8)',
          enabledIcon: '#027AFF',
          disabledText: 'rgba(0, 0, 0, 0.8)',
          enabledText: 'rgba(0, 0, 0, 1)',
        },
        rounded: {
          disabledBackground: 'rgba(255, 255, 255, 0.2)',
          enabledBackground: '#007AFF',
          disabledIcon: 'rgba(255, 255, 255, 0.8)',
          enabledIcon: 'rgba(255, 255, 255, 1)',
        },
      },
      custom: {
        rounded: {
          plane: {
            enabledBackground: '#FF9501',
          },
          mobileData: {
            enabledBackground: '#76D672',
          },
          wifi_bluetooth: {
            disabledBackground: 'rgba(255, 255, 255, 0.8)',
            disabledIcon: 'rgba(0, 0, 0, 0.7)',
          },
          airDrop: {},
          personalHotspot: {},
        },
      },
    },
    sections: {
      default: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'rgba(0, 0, 0, 0.7)',
      },
      selected: {
        backgroundColor: 'rgba(10,132,255,1)',
        color: 'rgba(255, 255, 255, 1)',
      },
      unselected: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        color: 'rgba(0, 0, 0, 0.6)',
      },
      networkcontrol: {
        icons: {
          play: 'rgba(255, 255, 255, 1)',
          wards: 'rgba(255, 255, 255, 0.5)',
          forward: 'rgba(0, 0, 0, 0.3)',
        },
      },
    },
    sliderControl: {
      background: 'rgba(0, 0, 0, 0.7)',
      icon: 'rgba(255, 255, 255, 0.8)',
    },
    screens: {
      musicControl: {
        songImageWrapper: 'rgba(255, 255, 255, 0.2)',
      },
    },
  };

  readonly Animations: TypeConstants['Animations'] = {
    sections: {
      default: {
        initialValue: 1,
        pressIn: {
          toValue: 1.2,
        },
        pressOut: {
          toValue: 1,
          friction: 2,
          tension: 10,
        },
      },
    },
    sliders: {
      // TODO: another animation
      default: {
        initialValue: 1,
        pressIn: {
          toValue: 1.2,
        },
        pressOut: {
          toValue: 1,
          friction: 2,
          tension: 10,
        },
      },
    },

    buttons: {
      default: {
        rounded: {
          // TODO: another animation
          initialValue: 1,
          pressIn: {
            toValue: 1.2,
          },
          pressOut: {
            toValue: 1,
            friction: 2,
            tension: 10,
          },
        },
        squared: {
          initialValue: 1,
          pressIn: {
            toValue: 1.2,
          },
          pressOut: {
            toValue: 1,
            friction: 2,
            tension: 10,
          },
        },
        rectangled: {
          initialValue: 1,
          pressIn: {
            toValue: 1.2,
          },
          pressOut: {
            toValue: 1,
            friction: 2,
            tension: 10,
          },
        },
      },
    },
    screens: {
      musicControl: {
        initial: {
          scaleValue: 0.45,
          translateYValue: -32,
          translateXValue: 85,
          backgroundOpacityValue: 0,
          containerOpacityValue: 0,
        },
        onMount: {
          scale: {
            toValue: 1,
            duration: 250,
          },
          translate: {
            Y: {
              toValue: 0,
              duration: 250,
            },
            X: {
              toValue: 0,
              duration: 250,
            },
          },
          opacity: {
            background: {
              toValue: 1,
              duration: 100,
            },
            container: {
              toValue: 1,
              duration: 50,
            },
          },
        },
        onUnmount: {
          scale: {
            toValue: 0.36,
            duration: 250,
          },
          translate: {
            Y: {
              toValue: -32, // android: -155 // X: -32 // 5s: -82
              duration: 250,
            },
            X: {
              toValue: 85,
              duration: 250,
            },
          },
          opacity: {
            background: {
              toValue: 0,
              duration: 150,
            },
            container: {
              toValue: 0,
              duration: 500,
            },
          },
        },
      },
      networkControl: {
        initial: {
          scaleValue: 0.38,
          translateYValue: -32,
          translateXValue: -85,
          backgroundOpacityValue: 0,
          containerOpacityValue: 0,
        },
        onMount: {
          scale: {
            toValue: 1,
            duration: 250,
          },
          translate: {
            Y: {
              toValue: 0,
              duration: 250,
            },
            X: {
              toValue: 0,
              duration: 250,
            },
          },
          opacity: {
            background: {
              toValue: 1,
              duration: 100,
            },
            container: {
              toValue: 1,
              duration: 50,
            },
          },
        },
        onUnmount: {
          scale: {
            toValue: 0.32,
            duration: 250,
          },
          translate: {
            Y: {
              toValue: -32,
              duration: 250,
            },
            X: {
              toValue: -85,
              duration: 250,
            },
          },
          opacity: {
            background: {
              toValue: 0,
              duration: 150,
            },
            container: {
              toValue: 0,
              duration: 500,
            },
          },
        },
      },
    },
  };
}

export default new Constants();
