import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings78747Navigator from '../features/Settings78747/navigator';
import Settings78728Navigator from '../features/Settings78728/navigator';
import Settings78709Navigator from '../features/Settings78709/navigator';
import Settings78217Navigator from '../features/Settings78217/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings78747: { screen: Settings78747Navigator },
Settings78728: { screen: Settings78728Navigator },
Settings78709: { screen: Settings78709Navigator },
Settings78217: { screen: Settings78217Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
