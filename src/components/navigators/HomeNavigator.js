import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Home from '../../screens/Home/Home';
import SpecialityScreenOfHome from '../../screens/Home/SpecialityScreenOfHome';
import DoctorOfHome from '../../screens/Home/DoctorOfHome';
function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SpecialityOfHome"
        component={SpecialityScreenOfHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DoctorOfHome"
        component={DoctorOfHome}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}


export default HomeNavigator;