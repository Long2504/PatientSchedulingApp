import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import MedicalRecord from '../../screens/MedicalRecord/MedicalRecord';
import MedicalRecordDetail from '../../screens/MedicalRecord/MedicalRecordDetail';
function MedicalRecordNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MedicalRecord"
        component={MedicalRecord}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MedicalRecordDetail"
        component={MedicalRecordDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}


export default MedicalRecordNavigator;