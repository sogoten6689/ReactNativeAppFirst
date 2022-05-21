import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ViewContainer } from '@src/components';
interface ComponentProps {
  example?: boolean;
}

export type HomeProps = ComponentProps;

export const Home: React.FunctionComponent<HomeProps> = ({}) => {
  return (
    <ViewContainer>
      <Text style={styles.title}>{'hello'}</Text>
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {},
});
