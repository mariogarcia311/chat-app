import { Platform } from 'react-native';

export const env = {
  apiUrl:
    Platform.OS === 'ios'
      ? 'http://localhost:10000'
      : 'http://192.168.1.2:10000',
};
