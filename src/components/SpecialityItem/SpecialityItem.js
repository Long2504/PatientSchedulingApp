import { Text, TouchableOpacity } from 'react-native';
import { styles } from './SpecialityItem.style';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
const SpecialityItem = ({ specialty, handleClickSpecialty, handleClickModal }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => handleClickSpecialty(specialty)}>
      <Text>{specialty.name}</Text>
      <Text numberOfLines={2} ellipsizeMode="tail">{specialty.description}</Text>
      <TouchableOpacity style={styles.btnInfo} onPress={() => handleClickModal(specialty)} ><Ionicons style={styles.iconInfo} size={24} name='information-circle-outline' /></TouchableOpacity>
    </TouchableOpacity>
  );
};

export default SpecialityItem;