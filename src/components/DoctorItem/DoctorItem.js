import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './DoctorItem.styles';
import Avatar from '../Avatar';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Button from '../Button';
import { useDispatch } from 'react-redux';
import { setDoctor, setSpeciality } from '../../redux/slice/schedule.slice';




const DoctorItem = ({ doctor, navigation }) => {
  const dispatch = useDispatch();
  const handleClickDoctor = (item) => {
    dispatch(setDoctor({ doctorID: item._id, doctorName: item.name }));
    dispatch(setSpeciality({ specialityID: item.specialityID._id, specialityName: item.specialityID.name }));
    navigation.navigate('Appointment');
  }
  return (
    <TouchableOpacity style={styles.container} onPress={() => handleClickDoctor(doctor)} >
      <View>
        <Avatar
          size={117}
          rounded
          source={{ uri: doctor.uri, width: 130, height: 130 }}
        />
      </View>
      <View style={styles.doctorInfo}>
        <Text style={styles.name}>{doctor.name}</Text>
        <Text style={styles.department}>{doctor.specialityID?.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DoctorItem;
