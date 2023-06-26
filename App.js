import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkLogged } from './src/redux/action/auth.action';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screens/Login/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from "react-redux";
import store from './src/redux/index.redux';
import { PaperProvider } from 'react-native-paper';
import DrawerNavigator from './src/components/navigators/DrawerNavigator';
import 'react-native-gesture-handler';
import moment from 'moment';
import VerifyScreen from './src/screens/verify/VerifyScreen';
import RegisterScreen from './src/screens/Register/RegisterScreen';

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
    dispath(checkLogged())
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
          </Stack.Navigator>
        )
          : <DrawerNavigator />
      }
    </NavigationContainer>
  )

};

export default App;
