import React from 'react';
import { StyleSheet, Text } from 'react-native';

// 1. Thư viện này có thể thêm phần tử bên trên thành phần ứng dụng gốc được AppRegistry.registerComponent đăng ký.
// This library can add element above the root app component registered by AppRegistry.registerComponent.
// có nghĩa là chồng lên trên á
import { RootSiblingParent } from 'react-native-root-siblings';

// 2. Provider là một component của react được cung cấp bởi thư viện react-redux.
// Nó dùng cho 1 mục đích duy nhất đó là cung cấp store cho những component con của nó
import { Provider } from 'react-redux';

// 3. Nếu bạn đang dùng React, gói root component của bạn trong PersistGate.
// Nó sẽ delay quá trình render UI app của bạn cho đến khi state đã được lấy ra và lưu trở lại vào Redux.
import { PersistGate } from 'redux-persist/integration/react';
import { DynamicStatusBar, Spinner } from './components';
import { Router } from './core/navigation/routes';
// import { Router } from './core/navigation/routers';
import { persistor, store } from './core/store';

const App = () => {
  return (
    // chồng các lớp lên trên lớp gốc
    <RootSiblingParent>
      {/* cung cấp store cho các component con */}
      <Provider store={store}>
        {/* trì hoãn việc render ui để có trước khi state dc cập nhật */}
        <PersistGate loading={null} persistor={persistor}>
          {/*
          // StatusBar is a component exported by the react-native library that helps to modify and style the native status bar in Android and iOS devices.
          // StatusBar là một thành phần được xuất bởi thư viện gốc phản ứng giúp sửa đổi và tạo kiểu cho thanh trạng thái gốc trong các thiết bị Android và iOS.
          // thanh giờ, ngày, thông báo, wifi gì á
          */}
          <DynamicStatusBar barStyle={'dark-content'} />
          {/* loading vòng vòng khi call api */}
          <Spinner />
          {/* <Router /> */}
          <Text style={styles.sectionTitle}>{'hello'}</Text>
        </PersistGate>
      </Provider>
    </RootSiblingParent>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
