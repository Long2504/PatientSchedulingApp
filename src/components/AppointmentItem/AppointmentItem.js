import React from 'react';
import { View, Text } from 'react-native';
import { Colors, Fonts } from '../../constants';
import Avatar from '../Avatar';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { styles } from './AppointmentItem.styles';
import doctor from "../../../assets/images/doctor.jpg"

import { useNavigation } from '@react-navigation/native';

const AppointmentItem = ({ id, name, department, date, time }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.doctorInfo}>
          <Avatar
            size={50}
            circle
            source={doctor}
          />
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.department}>{department}</Text>
          </View>
        </View>
        <View>
          <AntDesignIcon
            name={'right'}
            size={Fonts.LARGE}
            color={Colors.WHITE}
            onPress={() => navigation.navigate('AppointmentDetail', { id: id })}
          />
        </View>
      </View>
      <View style={styles.detail}>
        <View style={styles.wrap}>
          <AntDesignIcon
            name={'calendar'}
            size={Fonts.SMALL}
            color={Colors.WHITE}
            style={styles.spaceRight}
          />
          <Text style={styles.info}>{date}</Text>
        </View>
        <View style={styles.wrap}>
          <AntDesignIcon
            name={'clockcircleo'}
            size={Fonts.SMALL}
            color={Colors.WHITE}
            style={styles.spaceRight}
          />
          <Text style={styles.info}>{time}</Text>
        </View>
      </View>
    </View>
  );
};

export default AppointmentItem;
