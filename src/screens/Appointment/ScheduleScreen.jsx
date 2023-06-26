
import React from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, TextInput } from 'react-native';

import { Colors } from '../../constants';

import Auth from '../../utils/helper/auth.helper';
import AppHeader from '../../components/AppHeader/AppHeader';
import AppointmentItem from '../../components/AppointmentItem/AppointmentItem';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './ScheduleScreen.style';


const ScheduleScreen = ({ navigation: { navigate } }) => {

  return (
    <ScrollView style={styles.container} >
      <AppHeader
        back
        title={'Lịch đã đặt'}
        headerBg={Colors.DEFAULT_CORLOR}
        iconColor={Colors.WHITE}
      />
      <View style={[styles.appointment, styles.spaceX, styles.spaceTop]}>
        <AppointmentItem
          id={1}
          name={'BS. Lương Thanh Long'}
          department={'Khoa ngoại'}
          date={'20/02/2023'}
          time={'9:00'}
        />
      </View>
    </ScrollView >

  );
};

export default ScheduleScreen;
