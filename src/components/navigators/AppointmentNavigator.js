import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Appointment from '../../screens/Appointment/Appointment';
import SpecialityScreen from '../../screens/Doctor/SpecialityScreen';
import Doctor from '../../screens/Doctor/Doctor';
function AppointmentNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Appointment"
        component={Appointment}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Speciality"
        component={SpecialityScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Doctor"
        component={Doctor}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}


export default AppointmentNavigator;