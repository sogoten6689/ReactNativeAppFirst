import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
// lay độ cao của thanh trạng thái
import { getStatusBarHeight } from 'react-native-status-bar-height';

// thiết lập trạng thái thông tin phù hợp với tai thỏ
import { SafeAreaView } from 'react-navigation';

interface ComponentProps extends ViewProps {
  example?: any;
}

export type ViewContainerProps = ComponentProps;

export const ViewContainer: React.FunctionComponent<ViewContainerProps> = (
  props,
) => {
  const { style, ...restProps } = props;

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView} />
      <View {...restProps} style={[styles.viewContent, style]}>
        {props.children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeAreaView: {
    backgroundColor: 'blue',
    paddingTop: getStatusBarHeight(false),
  },
  viewContent: {
    flex: 1,
  },
});
