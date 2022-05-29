import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Home } from './home.component';

export const HomeContainer: React.FunctionComponent<NavigationInjectedProps> = (
  props,
) => {
  const navigationKey = 'HomeContainer';
  //   const dispatch = useDispatch();

  const onGoProfile = () => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'Profile',
    });
  };

  return <Home onGoProfile={onGoProfile} />;
};
