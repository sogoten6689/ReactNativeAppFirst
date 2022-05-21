import AsyncStorage from '@react-native-async-storage/async-storage';

export const PERSIST_CONFIG = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['session'],
  whilelist: [],
};
