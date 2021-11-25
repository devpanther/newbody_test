import HomeScreen from './Home';
import NetworkControlScreen from './NetworkScreen';

export const HOME_SCREEN = 'HomeScreen';
export const NETWORK_CONTROL_SCREEN = 'NetworkControlScreen';

export const Screens = new Map();
Screens.set(HOME_SCREEN, HomeScreen);
Screens.set(NETWORK_CONTROL_SCREEN, NetworkControlScreen);
