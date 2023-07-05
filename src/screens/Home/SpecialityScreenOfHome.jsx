import React, {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllSpecialty} from '../../redux/action/doctor.action';
import AppHeader from '../../components/AppHeader/AppHeader';
import Colors from '../../constants/Colors';
import {
  View,
  ScrollView,
  TextInput,
  Modal,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import SpecialityItem from '../../components/SpecialityItem/SpecialityItem';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styles} from './Speciality.styles';
import SelectDropdown from 'react-native-select-dropdown';

function SpecialityScreenOfHome({navigation}) {
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);
  const {listSpecialty, loading} = useSelector(state => state.doctorSlice);
  const [isModalVisible, setModalVisible] = useState(false);
  const [specialtyCurrent, setSpecialtyCurrent] = useState({});
  const [listSpecialtyFilter, setListSpecialtyFilter] = useState([]);

  useEffect(() => {
    if (listSpecialty.length === 0) {
      dispatch(getAllSpecialty());
    }
  }, []);

  useEffect(() => {
    if (listSpecialty) {
      setListSpecialtyFilter(listSpecialty);
    }
  }, [listSpecialty]);

  const handleClickModal = item => {
    setSpecialtyCurrent(item);
    setModalVisible(!isModalVisible);
  };

  const search = (text) => {
    if (text === '') {
      setListSpecialtyFilter(listSpecialty);
    } else {
      setListSpecialtyFilter(listSpecialty.filter((item) => {
        let name = item.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        let textSearch = text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        return name.includes(textSearch);
      }));
    }
    dropdownRef.current.reset();
  }

  const sort = (index) => {
    if (index === 0 || index === 1) {
      let newlist = [...listSpecialtyFilter];
      setListSpecialtyFilter(newlist.sort((a, b) => {
        let nameA = a.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        let nameB = b.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        if (nameA < nameB) {
          return index === 0 ? -1 : 1;
        }
        if (nameA > nameB) {
          return index === 0 ? 1 : -1;
        }
        return 0;
      }))
    }
  }

  function renderModal() {
    return (
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={[styles.modalContainer]}>
          <View style={styles.viewModal}>
            <Text style={styles.titleModal}>{specialtyCurrent.name}</Text>
            <ScrollView style={styles.description}>
              <Text
                style={{
                  fontSize: 15,
                  color: Colors.BLACK,
                  textAlign: 'justify',
                  lineHeight: 22,
                  paddingRight: 5,
                }}>
                {specialtyCurrent.description}
              </Text>
            </ScrollView>
            <TouchableOpacity
              style={styles.btnClose}
              onPress={() => setModalVisible(!isModalVisible)}>
              <Text style={styles.textClose}>Đóng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <View style={{flex: 1}}>
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
            <TextInput style={styles.input} placeholder="Tìm kiếm" onChange={(e)=>{search(e.nativeEvent.text)}}/>
          </View>
          <SelectDropdown
            ref={dropdownRef}
            data={[
              'Khoa A đến Z',
              'Khoa Z đến A',
            ]}
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
              height: 80,
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
        <ScrollView style={styles.containerMain}>
          {loading && (
            <ActivityIndicator size="large" color={Colors.BLUE} />
          )}
          {listSpecialtyFilter.map((item, index) => (
            <SpecialityItem
              key={index}
              specialty={item}
              handleClickModal={() => handleClickModal(item)}
            />
          ))}
        </ScrollView>
        {renderModal()}
      </View>
    </View>
  );
}

export default SpecialityScreenOfHome;
