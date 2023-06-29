import React, { Fragment, useEffect, useRef, useState } from 'react';
import AppHeader from '../../components/AppHeader/AppHeader';
import { Colors } from '../../constants';
import { View, ScrollView, SafeAreaView, TextInput } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DoctorItem from '../../components/DoctorItem/DoctorItem';
import { useSelector, useDispatch } from 'react-redux';
import { getAllDoctor, getAllDoctorBySpecialty } from '../../redux/action/doctor.action';
import { setDoctor } from '../../redux/slice/schedule.slice';
import { styles } from './Doctor.styles';
import SelectDropdown from 'react-native-select-dropdown';
const Doctor = ({ navigation }) => {

  const dropdownRef = useRef(null);

  const { speciality } = useSelector((state) => state.scheduleSlice);
  const dispatch = useDispatch();

  const { listDoctor } = useSelector((state) => state.doctorSlice);
  const [filter, setFilter] = useState({ category: -1, search: '' });
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
  // const sortDoctor = (sortType) => {
  //   let listProducts = [...newListProduct];
  //   if (sortType === -1) {
  //     return;
  //   }
  //   if (sortType === 0) {
  //     setNewListProduct(
  //       listProducts.sort((a, b) => {
  //         return a.lst_price - b.lst_price;
  //       }),
  //     );
  //     return;
  //   }
  //   if (sortType === 1) {
  //     setNewListProduct(
  //       listProducts.sort((a, b) => {
  //         return b.lst_price - a.lst_price;
  //       }),
  //     );
  //     return;
  //   }
  //   if (sortType === 2) {
  //     setNewListProduct(
  //       listProducts.sort((a, b) => {
  //         return a.name.localeCompare(b.name);
  //       }),
  //     );
  //     return;
  //   }
  //   if (sortType === 3) {
  //     setNewListProduct(
  //       listProducts.sort((a, b) => {
  //         return b.name.localeCompare(a.name);
  //       }),
  //     );
  //     return;
  //   }
  // };

  return (
    <Fragment>
      <AppHeader
        back
        title={'Bác Sỹ'}
        right={speciality.specialityID && 'x'}
        onRightPress={() => handleCancel()}
        headerBg={Colors.WHITE}
        iconColor={Colors.BLACK}
        titleAlight={'center'}
      />
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
        <SelectDropdown
          ref={dropdownRef}
          data={['Theo chuyên khoa', 'Từ A đến Z', 'Từ Z đến A']}
          defaultButtonText={
            <MaterialIcons name="sort" size={24} color="black" />
          }
          buttonTextAfterSelection={() => {
            return <MaterialIcons name="sort" size={24} color="black" />;
          }}
          buttonStyle={{
            width: '15%',
            height: 30,
            backgroundColor: 'white',
          }}
          buttonTextStyle={{
            fontSize: 14,
            color: 'black',
          }}
          dropdownStyle={{
            height: 120,
            width: 200,
            backgroundColor: 'white',
            marginLeft: -105,
          }}
          dropdownOverlayColor="rgba(0,0,0,0)"
          selectedRowTextStyle={{
            color: '#003893',
            fontWeight: 'bold',
          }}
          rowStyle={{
            height: 40,
            backgroundColor: 'white',
            paddingLeft: 10,
          }}
          rowTextStyle={{
            fontSize: 14,
            color: 'black',
            textAlign: 'left',

          }}
        />
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
