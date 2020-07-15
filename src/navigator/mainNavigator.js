import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen9778782Navigator from '../features/BlankScreen9778782/navigator';
import BlankScreen9678781Navigator from '../features/BlankScreen9678781/navigator';
import Settings78766Navigator from '../features/Settings78766/navigator';
import Settings78747Navigator from '../features/Settings78747/navigator';
import Settings78728Navigator from '../features/Settings78728/navigator';
import Settings78709Navigator from '../features/Settings78709/navigator';
import Settings78217Navigator from '../features/Settings78217/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen9778782: { screen: BlankScreen9778782Navigator },
BlankScreen9678781: { screen: BlankScreen9678781Navigator },
Settings78766: { screen: Settings78766Navigator },
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
