import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { View, Text, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import FAIcons from 'react-native-vector-icons/FontAwesome';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Logout } from '../../redux/action/auth.action';
import LinearGradient from 'react-native-linear-gradient';
import React, { useState } from 'react';
import { drawerItemStyles as styles } from "./customDrawerItem.styles";
import { Colors } from '../../constants';


function CustomDrawerContent(props) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(Logout());
  };
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <LinearGradient
          colors={[Colors.DEFAULT_CORLOR, '#4CA2E7']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.header}
        >
          {/* <Image style={styles.avatar} /> */}
          <View style={styles.nameView}>
            <Text style={{ fontSize: 20, fontWeight: 700, color: '#000' }}>
              Suong Phan
            </Text>
          </View>
        </LinearGradient>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        style={styles.drawerStyle}
        label={() => (
          <View style={styles.drawerLable}>
            <MIcons name="logout" size={24} color="#CC0000" />
            <Text style={styles.drawerTitle}>Logout</Text>
          </View>
        )}
        onPress={() => handleLogout()}
      />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
