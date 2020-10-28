import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile163918Navigator from '../features/UserProfile163918/navigator';
import Settings163917Navigator from '../features/Settings163917/navigator';
import Settings163915Navigator from '../features/Settings163915/navigator';
import SignIn2163913Navigator from '../features/SignIn2163913/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile163918: { screen: UserProfile163918Navigator },
Settings163917: { screen: Settings163917Navigator },
Settings163915: { screen: Settings163915Navigator },
SignIn2163913: { screen: SignIn2163913Navigator },

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
