import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTab from './BottomTab';
import { Text, Image, View } from 'react-native';
// import { logo } from '../assets/images';
// import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomDrawerContent from '../custom/CustomDrawerContent';
import ChangePassword from '../../screens/Profile/ChangePassword';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../constants';
import ScheduleScreen from '../../screens/Appointment/ScheduleScreen';
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="BottomTab"
        component={BottomTab}
        options={{
          drawerItemStyle: { display: 'none' },
          drawerType: 'front',
          title: '',
        }}
      />
      <Drawer.Screen
        name='Schedule'
        component={ScheduleScreen}
        options={{
          drawerType: 'front',
          title: () => (
            <TouchableWithoutFeedback
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 10,
              }}
            >
              <Ionicons name="calendar" size={24} color={Colors.DEFAULT_CORLOR} />
              <Text style={{ fontWeight: 'bold', color: '#000', marginLeft: 5 }}>
                Lịch hẹn
              </Text>
            </TouchableWithoutFeedback>
          ),
          headerLeft: () => null,
        }}
      />
      <Drawer.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          drawerType: 'front',
          title: () => (
            <TouchableWithoutFeedback
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 10,
              }}
            >
              <Ionicons name="lock-closed" size={24} color={Colors.DEFAULT_CORLOR} />
              <Text style={{ fontWeight: 'bold', color: '#000', marginLeft: 5 }}>
                Đổi mật khẩu
              </Text>
            </TouchableWithoutFeedback>
          ),
          headerLeft: () => null,
        }}
      />


    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
