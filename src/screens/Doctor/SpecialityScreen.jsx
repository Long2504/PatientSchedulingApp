import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllSpecialty } from "../../redux/action/doctor.action";
import MyTextInput from '../../components/MyTextInput';
import AppHeader from "../../components/AppHeader/AppHeader";
import Colors from '../../constants/Colors';
import { View, ScrollView } from "react-native";
import { Fragment } from "react";
import SpecialityItem from "../../components/SpecialityItem/SpecialityItem";
import { setSpeciality } from "../../redux/slice/schedule.slice";



function SpecialityScreen({ navigation }) {
  const dispatch = useDispatch()
  const { listSpecialty } = useSelector((state) => state.doctorSlice);
  const handleClickSpecialty = (item) => {
    dispatch(setSpeciality({ specialityID: item._id, specialityName: item.name }));
    navigation.goBack();
  }
  useEffect(() => {
    dispatch(getAllSpecialty())
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <AppHeader
        back
        title={'Khoa'}
        headerBg={Colors.DEFAULT_CORLOR}
        iconColor={Colors.WHITE}
      />
      <View
        style={{
          backgroundColor: '#fff',
          padding: 20,
          borderRadius: 15,
          marginTop: 20,
        }}>
        <MyTextInput
          placeholder="Search..."
          keyboardType="text"
          onChangeText={e => handleSearch(e)}
        />
        <ScrollView style={{ width: '100%' }}>
          {listSpecialty.map((item, index) => (
            <SpecialityItem
              key={index}
              specialty={item}
              handleClickSpecialty={() => handleClickSpecialty(item)}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

export default SpecialityScreen

