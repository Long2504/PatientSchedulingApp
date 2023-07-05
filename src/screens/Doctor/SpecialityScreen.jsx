import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllSpecialty } from "../../redux/action/doctor.action";
import AppHeader from "../../components/AppHeader/AppHeader";
import Colors from '../../constants/Colors';
import { View, ScrollView, TextInput, Modal, Text, TouchableOpacity } from "react-native";
import SpecialityItem from "../../components/SpecialityItem/SpecialityItem";
import { setSpeciality } from "../../redux/slice/schedule.slice";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { setDoctor } from "../../redux/slice/schedule.slice";
import { styles } from "./Speciality.styles";


function SpecialityScreen({ navigation }) {
  const dispatch = useDispatch()
  const { listSpecialty } = useSelector((state) => state.doctorSlice);
  const [isModalVisible, setModalVisible] = useState(false);
  const [specialtyCurrent, setSpecialtyCurrent] = useState({});

  const handleClickSpecialty = (item) => {
    dispatch(setSpeciality({ specialityID: item._id, specialityName: item.name }));
    dispatch(setDoctor({}));
    navigation.navigate('Doctor');
  }
  const handleClickModal = (item) => {
    setSpecialtyCurrent(item);
    setModalVisible(!isModalVisible);
  }
  function renderModal() {
    return (
      <Modal visible={isModalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={[styles.modalContainer]}>
          <View style={styles.viewModal}>
            <Text style={styles.titleModal}>{specialtyCurrent.name}</Text>
            <Text style={styles.description}>{specialtyCurrent.description}</Text>
            <TouchableOpacity style={styles.btnClose} onPress={() => setModalVisible(!isModalVisible)}>
              <Text style={styles.textClose}>Đóng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    )
  }
  useEffect(() => {
    dispatch(getAllSpecialty())
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <AppHeader
        back
        title={'Khoa'}
        headerBg={Colors.WHITE}
        iconColor={Colors.BLACK}
        titleAlight={'center'}
      />
      <View style={styles.container}>
        <View style={styles.headerSearch}>
          <View style={styles.search}>
            <MaterialIcons
              style={styles.icon}
              name="search"
              size={24}
              color="black"
            />
            <TextInput
              style={styles.input}
              placeholder="Tìm kiếm"
            />
          </View>
        </View>
        <ScrollView style={styles.containerMain}>
          {listSpecialty.map((item, index) => (
            <SpecialityItem
              key={index}
              specialty={item}
              handleClickSpecialty={() => handleClickSpecialty(item)}
              handleClickModal={() => handleClickModal(item)}
            />
          ))}
        </ScrollView>
        {renderModal()}
      </View>

    </View>
  )
}

export default SpecialityScreen

