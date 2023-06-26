import React, { Fragment, useState } from 'react';
import AppHeader from '../../components/AppHeader/AppHeader';
import { Colors } from '../../constants';
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from './Doctor.styles';
import { View, ScrollView } from 'react-native';
import DoctorItem from '../../components/DoctorItem/DoctorItem';
import { useSelector, useDispatch } from 'react-redux';
import { getAllDoctor, getAllDoctorBySpecialty } from '../../redux/action/doctor.action';
import { useEffect } from 'react';
import { setDoctor } from '../../redux/slice/schedule.slice';

const Doctor = ({ navigation }) => {

  // const [isFocus, setIsFocus] = useState(false);
  // const [speciality, setSpeciality] = useState(false);
  // const handleGetSpeciality = () => { };

  const { speciality } = useSelector((state) => state.scheduleSlice);
  const dispatch = useDispatch();

  const { listDoctor } = useSelector((state) => state.doctorSlice);
  useEffect(() => {
    if (speciality.specialityID) {
      dispatch(getAllDoctorBySpecialty({ specialtyID: speciality.specialityID }));
    }
    else {
      dispatch(getAllDoctor());
    }
  }, []);

  const handleCancel = () => {
    dispatch(setDoctor({}));
    navigation.navigate('Appointment');
  };

  return (
    <Fragment>
      <AppHeader
        back
        title={'Bác Sỹ'}
        right={speciality.specialityID && 'x'}
        onRightPress={() => handleCancel()}
        headerBg={Colors.DEFAULT_CORLOR}
        iconColor={Colors.WHITE}
      />
      <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 15 }}>
        {/* <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
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
        /> */}
      </View>
      <ScrollView style={{ width: '100%' }}>
        {listDoctor.map((item, index) => {
          return (
            <DoctorItem
              key={index}
              doctor={item}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
    </Fragment>
  );
};

export default Doctor;
