import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationService } from '@src/core/navigation/service';

export interface ComponentProps {
  title: string | undefined;
}

export type TopNavigationBarProps = ComponentProps;

export const TopNavigationBar: React.FunctionComponent<
  TopNavigationBarProps
> = () => {
  const onHeaderPress = () => {
    NavigationService.navigate('home');
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.viewLogo}
          activeOpacity={0.75}
          onPress={onHeaderPress}>
          <Text>{'Logo'}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  viewLogo: {
    flexDirection: 'row',
  },
  viewLogoText: {
    flexDirection: 'column',
    flex: 1,
  },
  viewLeft: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  viewCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewRight: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  txtTitle: {
    textAlign: 'center',
  },
  txtBtn: {
    textAlign: 'center',
  },
});
