import React, { Fragment, useEffect, useRef, useState } from 'react';
import AppHeader from '../../components/AppHeader/AppHeader';
import { Colors } from '../../constants';
import { View, ScrollView, SafeAreaView, TextInput, ActivityIndicator } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DoctorItem from '../../components/DoctorItem/DoctorItem';
import { useSelector, useDispatch } from 'react-redux';
import { getAllDoctor, getAllDoctorBySpecialty } from '../../redux/action/doctor.action';
import { setDoctor } from '../../redux/slice/schedule.slice';
import { styles } from './Doctor.styles';
import SelectDropdown from 'react-native-select-dropdown';
const DoctorOfHome = ({ navigation }) => {
  const dropdownRef = useRef(null);
  // const { speciality } = useSelector((state) => state.scheduleSlice);
  const dispatch = useDispatch();
  const { listDoctor, loading } = useSelector((state) => state.doctorSlice);
  const [listDoctorFilter, setListDoctorFilter] = useState([]);

  useEffect(() => {
    dispatch(getAllDoctor());
  }, []);

  useEffect(() => {
    if (listDoctor) {
      setListDoctorFilter(listDoctor);
    }
  }, [listDoctor]);

  const search = (text) => {
    if (text === '') {
      setListDoctorFilter(listDoctor);
    } else {
      setListDoctorFilter(listDoctor.filter((item) => {
        let name = item.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        let khoa = item.specialityID.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        let textSearch = text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        return (name + ' ' + khoa).includes(textSearch);
      }));
    }
    dropdownRef.current.reset();
  };

  const sort = index => {
    if (index === 0 || index === 1) {
      let newList = [...listDoctorFilter];
      setListDoctorFilter(
        newList.sort((a, b) => {
          let nameA = a.name
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
          let nameB = b.name
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
          if (nameA < nameB) {
            return index === 0 ? -1 : 1;
          }
          if (nameA > nameB) {
            return index === 0 ? 1 : -1;
          }
          return 0;
        }),
      );
    } else if (index === 2 || index === 3) {
      let newList = [...listDoctorFilter];
      setListDoctorFilter(
        newList.sort((a, b) => {
          let nameA = a.specialityID.name
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
          let nameB = b.specialityID.name
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
          if (nameA < nameB) {
            return index === 2 ? -1 : 1;
          }
          if (nameA > nameB) {
            return index === 2 ? 1 : -1;
          }
          return 0;
        }),
      );
    }
  };
  return (
    <Fragment>
      <AppHeader
        back
        title={'Bác sĩ'}
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
            onChange={e => search(e.nativeEvent.text)}
          />
        </View>
        <SelectDropdown
          ref={dropdownRef}
          data={['Tên A đến Z', 'Tên Z đến A', 'Khoa A đến Z', 'Khoa Z đến A']}
          onSelect={(selectedItem, index) => {
            sort(index);
          }}

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
            height: 160,
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
      <ScrollView style={{ width: '100%', paddingTop: 5, paddingHorizontal: 5 }}>
        {loading && (
          <ActivityIndicator size="large" color={Colors.BLUE} />
        )}
        {listDoctorFilter.map((item, index) => {
          return (
            <DoctorItem key={index} doctor={item} navigation={navigation} />
          );
        })}
      </ScrollView>
    </Fragment>
  );
};

export default DoctorOfHome;
