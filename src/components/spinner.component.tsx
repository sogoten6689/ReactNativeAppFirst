import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { AppState } from '@src/core/store';
import Modal from 'react-native-modal';
// import { themes } from '@src/core/themes';

export const Spinner: React.FunctionComponent = () => {
  const appReducer = useSelector((state: AppState) => state.app);

  return (
    <Modal
      isVisible={appReducer.visibleSpinner}
      animationIn="fadeIn"
      animationOut="fadeOut"
      animationInTiming={1}
      animationOutTiming={1}
      backdropOpacity={0}
      hasBackdrop={false}
      statusBarTranslucent
      backdropTransitionInTiming={1}
      backdropTransitionOutTiming={1}
      style={styles.container}>
      <ActivityIndicator size={'small'} color={'red'} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
