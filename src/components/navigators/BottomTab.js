import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home/Home';
import AppointmentNavigator from './AppointmentNavigator';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import MedicalRecord from '../../screens/MedicalRecord/MedicalRecord';
import Profile from '../../screens/Profile/Profile';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MedicalRecordNavigator from './MedicalRecordNavigator';
import HomeNavigator from './HomeNavigator';
const Tab = createBottomTabNavigator();
function BottomTab() {
  const styles = {
    size: 25,
    activeColor: '#00867E',
    inactiveColor: '#A6A6A6',
    barActiveBgrColor: '#fff',
  };
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          height: 65 + insets.bottom
        },
        tabBarLabelStyle: {
          paddingBottom: 7,
          fontSize: 14,
          fontWeight: 500,
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
        tabBarActiveBackgroundColor: styles.barActiveBgrColor,
        tabBarActiveTintColor: styles.activeColor,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarLabel: "Trang chủ",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name={'home'}
              size={styles.size}
              color={focused ? styles.activeColor : styles.inactiveColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Appointment"
        component={AppointmentNavigator}
        options={{
          tabBarLabel: "Đặt lịch",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="calendar"
              size={styles.size}
              color={focused ? styles.activeColor : styles.inactiveColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MedicalRecord"
        component={MedicalRecordNavigator}
        options={{
          tabBarLabel: "Bệnh án",
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="file-medical"
              size={styles.size}
              color={focused ? styles.activeColor : styles.inactiveColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Hồ sơ",
          tabBarIcon: ({ focused }) => (
            <FontistoIcon
              name={'doctor'}
              size={styles.size}
              color={focused ? styles.activeColor : styles.inactiveColor}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTab;
