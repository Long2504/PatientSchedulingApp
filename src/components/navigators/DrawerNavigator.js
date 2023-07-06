import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTab from './BottomTab';
import { Text, Image, View } from 'react-native';
import logo from "../../assets/images/logo.png";
// import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomDrawerContent from '../custom/CustomDrawerContent';
import ChangePassword from '../../screens/Auth/ChangePassword';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../constants';
import ScheduleScreen from '../../screens/Appointment/ScheduleScreen';
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="BottomTab"
      screenOptions={{
        drawerItemStyle: {
          borderBottomColor: '#0000001A',
          borderBottomWidth: 1,
          borderRadius: 0,
          marginHorizontal: 0,
          marginVertical: 0,
        },
        headerTitle: () => (
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: Colors.DEFAULT_CORLOR }}>
            Health Care
          </Text>
        ),
        headerTitleAlign: 'center',
        headerRight: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: 90, height: 90 }}>
            <Image style={{ height: "100%", width: '100%' }} resizeMode="contain" source={logo} />
          </View>
        ),

      }}
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
          headerShown: false,
          drawerType: 'front',
          title: () => (
            <TouchableWithoutFeedback
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <View style={{
                width: 40,
                height: 40,
                borderRadius: 8,
                backgroundColor: Colors.DEFAULT_LIGHT_CORLOR,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Ionicons name="calendar" size={24} color={Colors.BLACK_OPACITY_50} />
              </View>
              <Text style={{ fontWeight: 'bold', color: '#000', marginLeft: 10 }}>
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
          headerShown: false,
          drawerType: 'front',
          title: () => (
            <TouchableWithoutFeedback
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <View style={{
                width: 40,
                height: 40,
                borderRadius: 8,
                backgroundColor: Colors.DEFAULT_LIGHT_CORLOR,
                justifyContent: 'center',
                alignItems: 'center'
              }}>

                <Ionicons name="lock-closed" size={24} color={Colors.DEFAULT_CORLOR} />
              </View>
              <Text style={{ fontWeight: 'bold', color: '#000', marginLeft: 10 }}>
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
