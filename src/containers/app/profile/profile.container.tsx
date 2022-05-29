import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Profile } from './profile.component';

export const ProfileContainer: React.FunctionComponent<
  NavigationInjectedProps
> = (props) => {
  //   const navigationKey = 'ProfileContainer';
  //   const dispatch = useDispatch();

  const onGoback = () => {
    props.navigation.goBack();
  };

  return <Profile onGoback={onGoback} />;
};
