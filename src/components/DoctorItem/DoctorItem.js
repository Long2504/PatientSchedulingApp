import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './DoctorItem.styles';
import { Colors, Fonts } from '../../constants';
import Avatar from '../Avatar';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Button from '../Button';


const DoctorItem = ({ doctor, handleClickDoctor }) => {
  return (
    <View style={styles.container}>
      <View>
        <Avatar
          size={117}
          rounded
          source={{ uri: doctor.uri, width: 130, height: 130 }}
        />
      </View>
      <View style={styles.doctorInfo}>
        <Text style={styles.name}>{doctor.name}</Text>
        <Text style={styles.department}>{doctor.department}</Text>
        <Button
          primary
          title={'Đặt lịch khám'}
          onPress={() => handleClickDoctor()}
        />
      </View>
    </View>
  );
};

export default DoctorItem;
