import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ViewContainer } from '@src/components';
import { TouchableHighlight } from 'react-native-gesture-handler';
interface ComponentProps {
  onGoProfile: () => void;
  example?: boolean;
}

export type HomeProps = ComponentProps;

export const Home: React.FunctionComponent<HomeProps> = ({ onGoProfile }) => {
  return (
    <ViewContainer style={styles.container}>
      <Text style={styles.title}>{'Hello World'}</Text>
      <TouchableHighlight
        onPress={() => {
          onGoProfile();
        }}>
        <Text>{'Go to Profile'}</Text>
      </TouchableHighlight>
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {},
});
