import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Home from '../../screens/Home/Home';
import SpecialityScreenOfHome from '../../screens/Home/SpecialityScreenOfHome';
import DoctorOfHome from '../../screens/Home/DoctorOfHome';
function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Speciality"
        component={SpecialityScreenOfHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Doctor"
        component={DoctorOfHome}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}


export default HomeNavigator;