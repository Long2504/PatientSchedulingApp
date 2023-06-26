import { LOCAL } from '../constants/index.constants';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Auth = {};

Auth.getToken = async () => {
  try {
    const token = await AsyncStorage.getItem(LOCAL.TOKEN);
    if (token) return JSON.parse(token);
    return null;
  } catch (error) {
    console.error('Error getting token', error);
  }
};

Auth.getIdPatient = async () => {
  try {
    let patient = await AsyncStorage.getItem(LOCAL.PATIENT_INFO);
    patient = JSON.parse(patient);
    return patient._id;
  } catch (error) {
    console.error('Error getting idPatient', error);
  }
};

Auth.getUserInfo = async () => {
  try {
    let email = await AsyncStorage.getItem(LOCAL.EMAIL_USER);
    email = JSON.parse(email);
    let patient = await AsyncStorage.getItem(LOCAL.PATIENT_INFO);
    patient = JSON.parse(patient);
    return { ...patient, email }
  }
  catch (error) {
    console.error('Error getting userInfo', error);
  }
};

Auth.checkLogged = async () => {
  const token = await Auth.getToken();
  if (token) return true;
  return false;
};

Auth.setInfo = async data => {
  try {
    await AsyncStorage.multiRemove([LOCAL.TOKEN, LOCAL.PATIENT_INFO, LOCAL.ID_USER, LOCAL.EMAIL_USER]);
    await AsyncStorage.setItem(LOCAL.TOKEN, JSON.stringify(data.accessToken));
    await AsyncStorage.setItem(LOCAL.PATIENT_INFO, JSON.stringify(data.patient));
    await AsyncStorage.setItem(LOCAL.ID_USER, JSON.stringify(data.id));
    await AsyncStorage.setItem(LOCAL.EMAIL_USER, JSON.stringify(data.email));
  } catch (error) {
    console.error('Error setting userInfo', error);
  }
};

Auth.clearInfo = async () => {
  try {
    await AsyncStorage.removeItem(LOCAL.TOKEN);
    await AsyncStorage.removeItem(LOCAL.PATIENT_INFO);
    await AsyncStorage.removeItem(LOCAL.ID_USER);
    await AsyncStorage.removeItem(LOCAL.EMAIL_USER);
  } catch (error) {
    console.error('Error clearing userInfo', error);
  }

};

export default Auth;
