import React, { useEffect } from "react";
import { ScrollView, Text, View, TextInput, TouchableOpacity, Modal, Alert } from "react-native";
import { RadioButton } from 'react-native-paper';
import { styles } from "./Profile.style";
import { useDispatch, useSelector } from "react-redux";
import { getInfor } from "../../redux/action/auth.action";
import Button from '../../components/Button';
import { Calendar } from 'react-native-calendars';
import { useState } from "react";
import moment from "moment";
import Icon from 'react-native-vector-icons/FontAwesome';
import { updatePatient } from "../../redux/action/patient.action";

const Profile = () => {
  const { inforUser } = useSelector((state) => state.authSlice);

  const [isModalVisible, setModalVisible] = useState(false);
  const [profile, setProfile] = useState({
    name: '',
    dateOfBirth: '',
    sex: '',
    phone: '',
    email: '',
    address: '',
  });

  const handleChangeText = (name, value) => {
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);

  useEffect(() => {
    dispatch(getInfor());
  }, []);

  useEffect(() => {
    if (inforUser) {
      setProfile({
        _id: inforUser._id,
        name: inforUser.name,
        dateOfBirth: inforUser.dateOfBirth,
        sex: inforUser.sex,
        phone: inforUser.phone,
        email: inforUser.email,
        address: inforUser.address,
        userId: inforUser.userID,
      });
    }
  }, [inforUser]);


  const [currentDate, setCurrentDate] = useState('');

  const handleDateSelect = (date) => {
    setCurrentDate(moment(date).format('DD-MM-YYYY'));
    setModalVisible(false);
    setProfile({
      ...profile,
      "dateOfBirth": moment(date).format('DD-MM-YYYY'),
    });
  };

  function renderModal() {
    return (
      <Modal visible={isModalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={[styles.modalContainer]}>
          <View style={styles.calendarContainer} >
            <Calendar
              onDayPress={(day) => handleDateSelect(day.dateString)}
              markedDates={{
                [currentDate]: {
                  selected: true,
                  disableTouchEvent: true,
                  selectedColor: 'orange',
                  selectedTextColor: 'red',
                }
              }}
              maxDate={moment().add(0, 'days').format('YYYY-MM-DD')}
            />
          </View>
        </View>
      </Modal>
    )
  }

  const handleSaveProfile = () => {
    Alert.alert(
      "Cập nhật thông tin",
      "Bạn có muốn cập nhật thông tin không?",
      [
        {
          text: "Không",
          onPress: () => handleCancel(),
          style: "cancel"
        },
        {
          text: "Có",
          onPress: () => handleComfirm(),
          style: "ok"
        }
      ]
    );
  }
  const handleCancel = () => {
    setProfile({
      _id: inforUser._id,
      name: inforUser.name,
      dateOfBirth: inforUser.dateOfBirth,
      sex: inforUser.sex,
      phone: inforUser.phone,
      email: inforUser.email,
      address: inforUser.address,
      userId: inforUser.userID,
    });
  }

  const handleComfirm = () => {
    dispatch(updatePatient(profile));
    setCheck(!check);
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textTitle}>Thông tin cá nhân</Text>
      <View style={styles.containerMain}>
        <View style={styles.fieldItem}>
          <Text style={styles.fieldItemTitle}>
            Họ và tên <Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput
            value={profile.name}
            style={styles.fieldItemInput}
            onChangeText={(value) => handleChangeText('name', value)}
          />
        </View>
        <View style={styles.fieldItem}>
          <Text style={styles.fieldItemTitle}>
            Ngày tháng năm sinh <Text style={{ color: "red" }}>*</Text>
          </Text>
          <View style={styles.fieldDateOfBirth}>
            <TextInput
              value={profile.dateOfBirth}
              editable={false}
              style={{ fontSize: 17, width: '90%', color: '#000' }}
            />
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Icon name="calendar" size={25} color="#00867E" />
            </TouchableOpacity>
          </View>

        </View>
        <View style={styles.fieldItem}>
          <Text style={styles.fieldItemTitle}>
            Giới tính <Text style={{ color: "red" }}>*</Text>
          </Text>
          <View>
            <RadioButton.Group
              onValueChange={newValue => handleChangeText('sex', newValue)}
              value={profile.sex}
              style={styles.groupRadioBtn}
            >
              <View style={styles.radioBtnItem}>
                <RadioButton value="nam" />
                <Text>Nam</Text>
              </View>
              <View style={styles.radioBtnItem}>
                <RadioButton value="nu" />
                <Text>Nữ</Text>
              </View>
            </RadioButton.Group>
          </View>
        </View>
        <View style={styles.fieldItem}>
          <Text style={styles.fieldItemTitle}>
            Số điện thoại <Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput
            value={profile.phone}
            style={styles.fieldItemInput}
            onChangeText={(value) => handleChangeText('phone', value)}
          />
        </View>
        <View style={styles.fieldItem}>
          <Text style={styles.fieldItemTitle}>
            Email <Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput
            value={profile.email}
            style={styles.fieldItemInput}
            onChangeText={(value) => handleChangeText('email', value)}
          />
        </View>
        <View style={styles.fieldItem}>
          <Text style={styles.fieldItemTitle}>
            Địa chỉ <Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput
            value={profile.address}
            style={styles.fieldItemInput}
            onChangeText={(value) => handleChangeText('address', value)}
          />
        </View>
        <Button title="LƯU THÔNG TIN"
          primary
          onPress={() => handleSaveProfile()}
          style={styles.btnSave}
        />
      </View>
      {renderModal()}
    </ScrollView>
  );
};

export default Profile;
