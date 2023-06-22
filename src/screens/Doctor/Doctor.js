import React, { Fragment, useState } from 'react';
import AppHeader from '../../components/AppHeader/AppHeader';
import { Colors } from '../../constants';
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from './Doctor.styles';
import { View, FlatList } from 'react-native';
import DoctorItem from '../../components/DoctorItem/DoctorItem';
import { useSelector, useDispatch } from 'react-redux';
import { getAllDoctor } from '../../redux/action/doctor.action';
import { useEffect } from 'react';


const departments = [
  {
    _id: '647ee9e5aee1ff0c2b4ded18',
    name: 'Đa khoa',
    description:
      '1. Các bệnh nhiễm trùng như cảm lạnh, cúm, viêm họng.\n' +
      '2. Vấn đề tiêu hóa như đau dạ dày, táo bón, tiêu chảy.\n' +
      '3. Vấn đề hô hấp như hen suyễn, viêm phổi.\n' +
      '4. Bệnh tim mạch như huyết áp cao, bệnh lý van tim.\n' +
      '5. Bệnh tiểu đường và các vấn đề liên quan đến chất béo máu.\n' +
      '6. Vấn đề tâm lý như lo âu, trầm cảm.\n' +
      '7. Bệnh hô hấp như viêm phổi, hen suyễn.\n' +
      '8. Vấn đề về da như viêm da cơ địa, mụn trứng cá.\n' +
      '9. Tư vấn về sức khỏe tổng thể và các biện pháp phòng ngừa bệnh.',
    __v: 0,
  },
  {
    _id: '647ee9e5aee1ff0c2b4ded11',
    name: 'Đa khoa',
    description:
      '1. Các bệnh nhiễm trùng như cảm lạnh, cúm, viêm họng.\n' +
      '2. Vấn đề tiêu hóa như đau dạ dày, táo bón, tiêu chảy.\n' +
      '3. Vấn đề hô hấp như hen suyễn, viêm phổi.\n' +
      '4. Bệnh tim mạch như huyết áp cao, bệnh lý van tim.\n' +
      '5. Bệnh tiểu đường và các vấn đề liên quan đến chất béo máu.\n' +
      '6. Vấn đề tâm lý như lo âu, trầm cảm.\n' +
      '7. Bệnh hô hấp như viêm phổi, hen suyễn.\n' +
      '8. Vấn đề về da như viêm da cơ địa, mụn trứng cá.\n' +
      '9. Tư vấn về sức khỏe tổng thể và các biện pháp phòng ngừa bệnh.',
    __v: 0,
  },
];
const Doctor = () => {

  const handleClickDoctor = (item) => {
    dispatch(setSpeciality({ doctorID: item._id, doctorName: item.name }));
    navigation.goBack();
  }
  const [isFocus, setIsFocus] = useState(false);
  const [speciality, setSpeciality] = useState(false);
  const handleGetSpeciality = () => { };
  const { listDoctor } = useSelector((state) => state.doctorSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDoctor());
  }, []);
  return (
    <Fragment>
      <AppHeader
        back
        title={'Bác Sỹ'}
        right={'bell'}
        headerBg={Colors.DEFAULT_CORLOR}
        iconColor={Colors.WHITE}
      />
      <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 15 }}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={departments}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Chọn Khoa' : '...'}
          searchPlaceholder="Tìm kiếm..."
          value={speciality}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setIsFocus(false);
            setSpeciality(item.name);
            handleGetSpeciality(item);
          }}
        />
      </View>
      <FlatList
        data={listDoctor}
        renderItem={item => <DoctorItem doctor={item.item} handleClickDoctor={handleClickDoctor(item)} />}
        keyExtractor={item => item.id}
      />
    </Fragment>
  );
};

export default Doctor;
