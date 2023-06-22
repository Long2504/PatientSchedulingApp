import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './SpecialityItem.style';
import React, { useState } from 'react';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
const SpecialityItem = ({ specialty, handleClickSpecialty }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={() => handleClickSpecialty()}>
      <Text>{specialty.name}</Text>
      <Text numberOfLines={2} ellipsizeMode="tail">{specialty.description}</Text>

      <TouchableOpacity onPress={toggleModal} ><Ionicons style={styles.iconInfo} size={24} name='information-circle-outline' /></TouchableOpacity>
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={{ backgroundColor: 'white', padding: 20 }}>
          <Text>{specialty.description}</Text>
          <TouchableOpacity title="Close" onPress={toggleModal} />
        </View>
      </Modal>
    </TouchableOpacity>
  );


};

export default SpecialityItem;