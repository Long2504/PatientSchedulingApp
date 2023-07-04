
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
        headerBg={Colors.WHITE}
        iconColor={Colors.BLACK}
        titleAlight={'center'}
      />
      <View style={[styles.appointment, styles.spaceX, styles.spaceTop]}>
        <AppointmentItem
          id={1}
          name={'BS. Moreyra Francisco Carlos'}
          department={'Tim mạch'}
          date={'03/07/2023'}
          time={'8:00'}
        />
      </View>
    </ScrollView >

  );
};

export default ScheduleScreen;
