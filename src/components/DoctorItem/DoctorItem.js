import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './DoctorItem.styles';
import {useDispatch} from 'react-redux';
import {setDoctor, setSpeciality} from '../../redux/slice/schedule.slice';
import doctorImgae from '../../assets/images/doctor.jpg';

const DoctorItem = ({doctor, navigation}) => {
  const dispatch = useDispatch();
  const handleClickDoctor = item => {
    dispatch(setDoctor({doctorID: item._id, doctorName: item.name}));
    dispatch(
      setSpeciality({
        specialityID: item.specialityID._id,
        specialityName: item.specialityID.name,
      }),
    );
    navigation.navigate('Appointment');
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleClickDoctor(doctor)}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={doctorImgae}
          style={{
            width: 100,
            height: 100,
            resizeMode: 'cover',
            borderRadius: 5,
          }}
        />
      </View>
      <View style={styles.doctorInfo}>
        <Text style={styles.name}>{doctor.name}</Text>
        <Text style={styles.department}>Khoa: {doctor.specialityID?.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DoctorItem;
