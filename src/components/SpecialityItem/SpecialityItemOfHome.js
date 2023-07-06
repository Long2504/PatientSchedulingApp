import { Text, TouchableOpacity } from 'react-native';
import { styles } from './SpecialityItem.style';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
const SpecialityItemOfHome = ({
  specialty,
  handleClickModal,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
    >
      <Text style={styles.textNameSpeciality}>
        {specialty.name}
      </Text>
      <Text
        numberOfLines={2}
        ellipsizeMode="tail"
        style={styles.textDescription}
      >
        {specialty.description}
      </Text>
      <TouchableOpacity
        style={styles.btnInfo}
        onPress={() => handleClickModal(specialty)}>
        <Ionicons
          style={styles.iconInfo}
          size={24}
          name="information-circle-outline"
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default SpecialityItemOfHome;
