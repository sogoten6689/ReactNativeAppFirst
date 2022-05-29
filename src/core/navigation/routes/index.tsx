import {
  createAppContainer,
  NavigationContainer,
  createSwitchNavigator,
} from 'react-navigation';
import {
  createStackNavigator,
  StackViewTransitionConfigs,
} from 'react-navigation-stack';

// import { createDrawerNavigator } from 'react-navigation-drawer';
import { SplashContainer } from '@src/containers/splash/splash.container';
import { HomeContainer } from '@src/containers/app/home/home.container';
import { ProfileContainer } from '@src/containers/app/profile/profile.container';

const AppNavigator: NavigationContainer = createStackNavigator(
  {
    ['home']: HomeContainer,
    ['Profile']: ProfileContainer,
  },
  {
    headerMode: 'screen',
    defaultNavigationOptions: {
      header: null,
    },
    transitionConfig: () => StackViewTransitionConfigs.NoAnimation,
  },
);

// const AppDrawerNavigator: NavigationContainer = createDrawerNavigator({
//   ['app']: AppNavigator,
// });

const createAppRouter = (container: any): NavigationContainer => {
  return createAppContainer(
    createSwitchNavigator(
      {
        ['splash']: SplashContainer,
        ['appDrawer']: container,
      },
      { initialRouteName: 'splash' },
    ),
  );
};

export const Router: NavigationContainer = createAppRouter(AppNavigator);
