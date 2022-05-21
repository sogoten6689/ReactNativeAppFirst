import React from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar, ViewProps, StatusBarStyle } from 'react-native';

interface ComponentProps {
  barStyle: StatusBarStyle;
}

export type DynamicStatusBarProps = ViewProps & ComponentProps;

// StatusBar is a component exported by the react-native library that helps to modify and style the native status bar in Android and iOS devices.
// StatusBar là một thành phần được xuất bởi thư viện gốc phản ứng giúp sửa đổi và tạo kiểu cho thanh trạng thái gốc trong các thiết bị Android và iOS.
// thanh giờ, ngày, thông báo, wifi gì á
export const DynamicStatusBar: React.FunctionComponent<
  DynamicStatusBarProps
> = (props) => {
  const getStatusBarContent = (): StatusBarStyle => {
    if (props.barStyle === 'light-content') {
      return 'light-content';
    } else {
      return 'dark-content';
    }
  };

  // style background-color transparent
  const androidStatusBarBgColor: string = styles.container.backgroundColor;
  // "default" | "light-content" | "dark-content"
  const barStyle: StatusBarStyle = getStatusBarContent();

  return (
    <StatusBar
      translucent
      backgroundColor={androidStatusBarBgColor}
      barStyle={barStyle}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
});
