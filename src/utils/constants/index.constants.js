import { Platform } from 'react-native';
const PLATFORM = Platform.OS;
export const IS_ANDROID = PLATFORM === 'android';
export const LOCAL = {
  TOKEN: 'token',
  ID_USER: 'user_id',
  EMAIL_USER: 'user_email',
  PATIENT_INFO: 'patient_info',
};

// export const BASE_API = 'http://45.32.28.204:8081';
export const BASE_API = 'https://160b-42-1-94-27.ngrok-free.app';
