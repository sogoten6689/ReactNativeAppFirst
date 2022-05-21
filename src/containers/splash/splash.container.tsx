import React, { useEffect } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { useDispatch } from 'react-redux';
import { Splash } from './splash.component';
// import remoteConfig from '@react-native-firebase/remote-config';
// import { API_KEY, API_URL } from '../../../config';
// import { SERVER_ADDRESS as SERVER_ADDRESS_DEV } from '../../../config/dev.env';
// import { SERVER_ADDRESS as SERVER_ADDRESS_PROD } from '../../../config/prod.env';
import { onSetAlertPresent } from '@src/core/store/reducer/app/actions';

export const SplashContainer: React.FunctionComponent<
  NavigationInjectedProps
> = (props) => {
  const navigationKey = 'SplashContainer';
  const dispatch: any = useDispatch();

  useEffect(() => {
    // Set language
    // I18n.setLocale(languageKey);
    onNavigateToAppHandle();

    // Handle when app status changed
  });

  const onNavigateToAppHandle = () => {
    dispatch(onSetAlertPresent(false));

    props.navigation.navigate({
      key: navigationKey,
      routeName: 'app',
    });
  };

  return <Splash />;
};
