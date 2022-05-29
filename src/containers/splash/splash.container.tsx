import React, { useEffect } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { useDispatch } from 'react-redux';
import { Splash } from './splash.component';
import { onSetAlertPresent } from '@src/core/store/reducer/app/actions';

export const SplashContainer: React.FunctionComponent<
  NavigationInjectedProps
> = (props) => {
  const navigationKey = 'SplashContainer';
  const dispatch: any = useDispatch();

  useEffect(() => {
    onNavigateToAppHandle();
  });

  const onNavigateToAppHandle = () => {
    dispatch(onSetAlertPresent(false));

    props.navigation.navigate({
      key: navigationKey,
      routeName: 'appDrawer',
    });
  };

  return <Splash />;
};
