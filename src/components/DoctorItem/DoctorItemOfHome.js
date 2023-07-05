import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './DoctorItem.styles';
import doctorImgae from "../../assets/images/doctor.jpg"



const DoctorItemOfHome = ({ doctor, navigation }) => {
  const handleClickDoctor = (item) => {
    console.log(item, "item");
  }
  return (
    <TouchableOpacity style={styles.container} onPress={() => handleClickDoctor(doctor)} >
      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Image source={doctorImgae} style={{
          width: 100,
          height: 100,
          resizeMode: 'cover',
          borderRadius: 5,
        }} />
      </View>
      <View style={styles.doctorInfo}>
        <Text style={styles.name}>{doctor.name}</Text>
        <Text style={styles.department}>{doctor.specialityID?.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DoctorItemOfHome;
