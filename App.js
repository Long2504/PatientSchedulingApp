import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkLogged } from './src/redux/action/auth.action';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screens/Auth/LoginScreen';
import RegisterScreen from './src/screens/Auth/RegisterScreen';
import ForgotPasswordScreen from './src/screens/Auth/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/Auth/NewPasswordScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from "react-redux";
import store from './src/redux/index.redux';
import { PaperProvider } from 'react-native-paper';
import DrawerNavigator from './src/components/navigators/DrawerNavigator';
import 'react-native-gesture-handler';
import moment from 'moment';
import VerifyScreen from './src/screens/Auth/VerifyScreen';
import { getPatientInLocal } from './src/redux/action/patient.action';


const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </Provider>
  )
};

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  moment.updateLocale(
    'vi', {
    weekdays: ['CN', 'Th2', 'Th3', 'Th4', 'Th5', 'Th6', 'Th7'],
  }
  )
  const { isLogged } = useSelector(state => state.authSlice);

  const dispath = useDispatch();

  useEffect(() => {
    dispath(checkLogged());
    dispath(getPatientInLocal());
  }, []);


  return (
    <NavigationContainer>
      {
        !isLogged ? (
          <Stack.Navigator initialRouteName='LoginScreen'>
            <Stack.Screen
              component={LoginScreen}
              name="LoginScreen"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              component={RegisterScreen}
              name="RegisterScreen"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              component={VerifyScreen}
              name="VerifyScreen"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              component={ForgotPasswordScreen}
              name="ForgotPasswordScreen"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              component={NewPasswordScreen}
              name="NewPasswordScreen"
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        )
          : <DrawerNavigator />
      }
    </NavigationContainer>
  )

};

export default App;
