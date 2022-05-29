import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import { ViewContainer } from '@src/components';
interface ComponentProps {
  onGoback: () => void;
  example?: boolean;
}

export type ProfileProps = ComponentProps;

export const Profile: React.FunctionComponent<ProfileProps> = ({
  onGoback,
}) => {
  return (
    <ViewContainer style={styles.container}>
      <Text style={styles.title}>{'My profile'}</Text>
      <TouchableHighlight onPress={() => onGoback()}>
        <Text>{'Go Back'}</Text>
      </TouchableHighlight>
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {},
});
