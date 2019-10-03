import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer, crea } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';


import HomeNavigator from './HomeNavigator';
import DrawerLayout from '../screens/DrawerNavigation';

const Router = createStackNavigator(
    {
        HomeRouter:
        {
            screen: HomeNavigator
        }
    },
    {
        headerMode:'none',
        initialRouteName: 'HomeRouter',
    }
)

const RootStack = createDrawerNavigator(
    {
        Main: {
            screen: Router
        }
    },
    {
       
        contentComponent: DrawerLayout,
        drawerType: 'slide',
        drawerPosition: 'left',
        drawerLockMode: 'unlocked',
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
        drawerWidth: 350,
  
    }
);


export default createAppContainer(RootStack);


