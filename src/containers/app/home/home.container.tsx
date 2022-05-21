import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Home } from './home.component';

export const HomeContainer: React.FunctionComponent<
  NavigationInjectedProps
> = () => {
  //   const navigationKey = 'HomeContainer';
  //   const dispatch = useDispatch();

  return <Home />;
};
