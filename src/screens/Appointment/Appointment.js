
import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, TextInput, Alert } from 'react-native';
import Button from '../../components/Button';
import { styles } from './AppointmentStyle';
import { useState } from 'react';
import moment from 'moment';
import { Calendar } from 'react-native-calendars';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import { createAppointmentSchedule, getScheduleByDoctor, getScheduleBySpeciality } from '../../redux/action/schedule.action';
import { Colors } from '../../constants';
import Entypo from 'react-native-vector-icons/Entypo';
import { useFocusEffect } from '@react-navigation/native';

import Auth from '../../utils/helper/auth.helper';


const Appointment = ({ navigation: { navigate } }) => {

  const { speciality, doctor, listSchedule, error } = useSelector(state => state.scheduleSlice);
  console.log(doctor, "doctor");
  const { patient } = useSelector(state => state.patientSlice);
  const { inforUser } = useSelector((state) => state.authSlice);
  const dayTomorrow = moment().add(1, 'days').format('dddd');
  const dateTomorrow = moment().add(1, 'days').format('DD');
  const monthTomorrow = moment().add(1, 'days').format('M');
  const dayAfterTomorrow = moment().add(2, 'days').format('dddd');
  const dateAfterTomorrow = moment().add(2, 'days').format('DD');
  const monthAfterTomorrow = moment().add(2, 'days').format('M');
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [currentMethod, setCurrentMethod] = useState(0);
  const dispatch = useDispatch();

  const handleDateSelect = (date) => {
    setCurrentDate(date);
    setModalVisible(false);
    setIndexClickTime(3);
    var date = moment(date).format('YYYY-MM-DD');
    if (!date) return;
    if (doctor.doctorID && (moment(date).day() !== 0 || moment(date).day() !== 6)) {
      dispatch(getScheduleByDoctor({ doctorID: doctor.doctorID, date: date }));
      return;
    }
    if (speciality.specialityID && (moment(date).day() !== 0 || moment(date).day() !== 6)) {
      dispatch(getScheduleBySpeciality({ specialityID: speciality.specialityID, date: date }));
      return;
    }
  };

  function renderModal() {
    return (
      <Modal visible={isModalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={[styles.modalContainer]}>
          <View style={styles.calendarContainer} >
            <Text style={styles.titleCalendar}>Chọn ngày khám</Text>
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
              minDate={moment().add(3, 'days').format('YYYY-MM-DD')}
              maxDate={moment().add(9, 'days').format('YYYY-MM-DD')}
            />
            <Button title="Chọn" onPress={() => handleDateSelect()} />
          </View>
        </View>
      </Modal>
    )
  }

  const [indexClickTime, setIndexClickTime] = useState(0);

  const handleGetSchedule = (type) => {
    setIndexClickTime(type);
    let date = '';
    if (type === 1) {
      date = moment().add(1, 'days').format('YYYY-MM-DD');
    }
    if (type === 2) {
      date = moment().add(2, 'days').format('YYYY-MM-DD')
    }
    setCurrentDate(date);
    if (doctor.doctorID && (moment(date).day() !== 0 || moment(date).day() !== 6)) {
      dispatch(getScheduleByDoctor({ doctorID: doctor.doctorID, appointmentDate: date }));
      return;
    }
    if (speciality.specialityID && (moment(date).day() !== 0 || moment(date).day() !== 6)) {
      dispatch(getScheduleBySpeciality({ specialityID: speciality.specialityID, appointmentDate: date }));
      return;
    }
  };

  const loadingSchedule = (scheduleList, date) => {
    if (!date) return;
    if (moment(date).day() === 0 || moment(date).day() === 6) {
      return (
        <View style={styles.containerScheduleTime}>
          <Text style={styles.titleContainer}>Giờ khám mong muốn</Text>
          <View style={styles.timeExamination}>
            <Text style={styles.textSchedule}>Không có lịch khám</Text>
          </View>
        </View>
      )
    }
    if (scheduleList.length === 14) {
      return (
        <View style={styles.containerScheduleTime}>
          <Text style={styles.titleContainer}>Giờ khám mong muốn</Text>
          <View style={styles.timeExamination}>
            <Button title={"08:00"}
              key={0}
              disabled={scheduleList[0] === true && true}
              style={[
                styles.btnTime,
                {
                  backgroundColor: currentTime === "08:00" ? Colors.DEFAULT_CORLOR : colorOFSchedule.inactiveBgrMethodItem,
                  opacity: scheduleList[0] === true ? colorOFSchedule.opacityInActive : 1
                }
              ]}
              textColor={currentTime === "08:00" && Colors.WHITE}
              onPress={() => clickChooseTime("08:00")}
            />
            <Button title={"08:30"}
              key={1}
              disabled={scheduleList[1] === true && true}
              style={[
                styles.btnTime,
                { backgroundColor: currentTime === "08:30" ? Colors.DEFAULT_CORLOR : colorOFSchedule.inactiveBgrMethodItem, opacity: scheduleList[1] === true ? colorOFSchedule.opacityInActive : 1 }
              ]}
              textColor={currentTime === "08:30" && Colors.WHITE}
              onPress={() => clickChooseTime("08:30")}
            />
            <Button title={"09:00"}
              key={2}
              disabled={scheduleList[2] === true && true}
              style={[
                styles.btnTime,
                { backgroundColor: currentTime === "09:00" ? Colors.DEFAULT_CORLOR : colorOFSchedule.inactiveBgrMethodItem, opacity: scheduleList[2] === true ? colorOFSchedule.opacityInActive : 1 }
              ]}
              onPress={() => clickChooseTime("09:00")}
              textColor={currentTime === "09:00" && Colors.WHITE}
            />
            <Button title={"09:30"}
              key={3}
              disabled={scheduleList[3] === true && true}
              style={[
                styles.btnTime,
                { backgroundColor: currentTime === "09:30" ? Colors.DEFAULT_CORLOR : colorOFSchedule.inactiveBgrMethodItem, opacity: scheduleList[3] === true ? colorOFSchedule.opacityInActive : 1 }
              ]}
              onPress={() => clickChooseTime("09:30")}
              textColor={currentTime === "09:30" && Colors.WHITE}
            />
            <Button title={"10:00"}
              key={4}
              disabled={scheduleList[4] === true && true}
              style={[
                styles.btnTime,
                { backgroundColor: currentTime === "10:00" ? Colors.DEFAULT_CORLOR : colorOFSchedule.inactiveBgrMethodItem, opacity: scheduleList[4] === true ? colorOFSchedule.opacityInActive : 1 }
              ]}
              onPress={() => clickChooseTime("10:00")}
              textColor={currentTime === "10:00" && Colors.WHITE}
            />
            <Button title={"10:30"}
              key={5}
              disabled={scheduleList[5] === true && true}
              style={[
                styles.btnTime,
                { backgroundColor: currentTime === "10:30" ? Colors.DEFAULT_CORLOR : colorOFSchedule.inactiveBgrMethodItem, opacity: scheduleList[5] === true ? colorOFSchedule.opacityInActive : 1 }
              ]}
              onPress={() => clickChooseTime("10:30")}
              textColor={currentTime === "10:30" && Colors.WHITE}
            />
            <Button title={"11:00"}
              key={6}
              disabled={scheduleList[6] === true && true}
              style={[
                styles.btnTime,
                { backgroundColor: currentTime === "11:00" ? Colors.DEFAULT_CORLOR : colorOFSchedule.inactiveBgrMethodItem, opacity: scheduleList[6] === true ? colorOFSchedule.opacityInActive : 1 }
              ]}
              onPress={() => clickChooseTime("11:00")}
              textColor={currentTime === "11:00" && Colors.WHITE}
            />
            <Button title={"13:00"}
              key={7}
              disabled={scheduleList[7] === true && true}
              style={[
                styles.btnTime,
                { backgroundColor: currentTime === "13:00" ? Colors.DEFAULT_CORLOR : colorOFSchedule.inactiveBgrMethodItem, opacity: scheduleList[7] === true ? colorOFSchedule.opacityInActive : 1 }
              ]}
              onPress={() => clickChooseTime("13:00")}
              textColor={currentTime === "13:00" && Colors.WHITE}
            />
            <Button title={"13:30"}
              key={8}
              disabled={scheduleList[8] === true && true}
              style={[
                styles.btnTime,
                { backgroundColor: currentTime === "13:30" ? Colors.DEFAULT_CORLOR : colorOFSchedule.inactiveBgrMethodItem, opacity: scheduleList[8] === true ? colorOFSchedule.opacityInActive : 1 }
              ]}
              onPress={() => clickChooseTime("13:30")}
              textColor={currentTime === "13:30" && Colors.WHITE}
            />
            <Button title={"14:00"}
              key={9}
              disabled={scheduleList[9] === true && true}
              style={[
                styles.btnTime,
                { backgroundColor: currentTime === "14:00" ? Colors.DEFAULT_CORLOR : colorOFSchedule.inactiveBgrMethodItem, opacity: scheduleList[9] === true ? colorOFSchedule.opacityInActive : 1 }
              ]}
              onPress={() => clickChooseTime("14:00")}
              textColor={currentTime === "14:00" && Colors.WHITE}
            />
            <Button title={"14:30"}
              key={10}
              disabled={scheduleList[10] === true && true}
              style={[
                styles.btnTime,
                { backgroundColor: currentTime === "14:30" ? Colors.DEFAULT_CORLOR : colorOFSchedule.inactiveBgrMethodItem, opacity: scheduleList[10] === true ? colorOFSchedule.opacityInActive : 1 }
              ]}
              onPress={() => clickChooseTime("14:30")}
              textColor={currentTime === "14:30" && Colors.WHITE}
            />
            <Button title={"15:00"}
              key={11}
              disabled={scheduleList[11] === true && true}
              style={[
                styles.btnTime,
                { backgroundColor: currentTime === "15:00" ? Colors.DEFAULT_CORLOR : colorOFSchedule.inactiveBgrMethodItem, opacity: scheduleList[11] === true ? colorOFSchedule.opacityInActive : 1 }
              ]}
              onPress={() => clickChooseTime("15:00")}
              textColor={currentTime === "15:00" && Colors.WHITE}
            />
            <Button title={"15:30"}
              key={12}
              disabled={scheduleList[12] === true && true}
              style={[
                styles.btnTime,
                { backgroundColor: currentTime === "15:30" ? Colors.DEFAULT_CORLOR : colorOFSchedule.inactiveBgrMethodItem, opacity: scheduleList[12] === true ? colorOFSchedule.opacityInActive : 1 }
              ]}
              onPress={() => clickChooseTime("15:30")}
              textColor={currentTime === "15:30" && Colors.WHITE}
            />
            <Button title={"16:00"}
              key={13}
              disabled={scheduleList[13] === true && true}
              style={[
                styles.btnTime,
                { backgroundColor: currentTime === "16:00" ? Colors.DEFAULT_CORLOR : colorOFSchedule.inactiveBgrMethodItem, opacity: scheduleList[13] === true ? colorOFSchedule.opacityInActive : 1 }
              ]}
              onPress={() => clickChooseTime("16:00")}
              textColor={currentTime === "16:00" && Colors.WHITE}
            />
          </View>
        </View>

      )
    }
  }
  const [currentTime, setCurrentTime] = useState('');

  const clickChooseTime = (time) => {
    setCurrentTime(time);
  }
  const [reasonForExamination, setReasonForExaminationt] = useState('');

  const handleBookSchedule = async () => {
    const patientIDget = await Auth.getIdPatient();
    if (currentMethod === 0) {
      Alert.alert("Thông báo", "Vui lòng chọn phương thức khám");
      return;
    }
    if (!doctor.doctorID && currentMethod === 1) {
      Alert.alert("Thông báo", "Vui lòng chọn bác sĩ khám");
      return;
    }
    if (!speciality.specialityID && currentMethod === 2) {
      Alert.alert("Thông báo", "Vui lòng chọn chuyên khoa khám");
      return;
    }
    if (!currentDate) {
      Alert.alert("Thông báo", "Vui lòng chọn ngày khám");
      return;
    }
    if (!currentTime) {
      Alert.alert("Thông báo", "Vui lòng chọn giờ khám");
      return;
    }
    if (!reasonForExamination) {
      Alert.alert("Thông báo", "Vui lòng nhập lý do khám");
      return;
    }
    if (!inforUser.name || !inforUser.phone || !inforUser.email || !inforUser.address || !inforUser.dateOfBirth) {
      Alert.alert("Thông báo", "Vui lòng cập nhật thông tin cá nhân");
      return;
    }
    const schedule = {
      doctorID: doctor.doctorID,
      specialityID: speciality.specialityID,
      appointmentDate: currentDate,
      appointmentTime: currentTime,
      description: reasonForExamination,
      patientID: patientIDget,
    };
    dispatch(createAppointmentSchedule(schedule, "schedule"));
    Alert.alert("Thông báo", "Đặt lịch thành công");
  }
  const colorOFSchedule = {
    activeBgrMethodItem: '#ddeef2',
    inactiveBgrMethodItem: '#eaeaea',
    colorYellow: '#ffaa2a',
    opacityInActive: 0.4,
  }

  // useFocusEffect(
  //   useCallback(() => {
  //     const onBackPress = () => {
  //       Alert.alert("Thông báo", "Bạn có muốn hủy đặt lịch không?", [
  //         {
  //           text: "Không",
  //           onPress: () => null,
  //           style: "cancel"
  //         },
  //         { text: "Có", onPress: () => navigation.goBack() }
  //       ]);
  //       return true;
  //     };
  //     BackHandler.addEventListener("hardwareBackPress", onBackPress);
  //     return () =>
  //       BackHandler.removeEventListener("hardwareBackPress", onBackPress);
  //   }, [])
  // );

  return (
    <ScrollView style={styles.container} >
      <View style={styles.containerMain}>
        <Text style={styles.title} >Thông tin đặt lịch</Text>
        <View style={styles.containerMethod}>
          <View style={styles.containerTitle} >
            <Entypo name="chevron-right" size={27} color={colorOFSchedule.colorYellow} />
            <Text style={styles.titleContent}>Thông tin đặt hẹn</Text>
          </View>
          <Text style={styles.titleContainer}>Chọn phương thức</Text>
          <View style={styles.methodExamination}>
            <Button title="Đặt lịch theo bác sĩ"
              style={[
                styles.methodItem,
                {
                  backgroundColor: currentMethod === 1 ? colorOFSchedule.activeBgrMethodItem : colorOFSchedule.inactiveBgrMethodItem,
                  borderWidth: currentMethod === 1 ? 1 : 0,
                }
              ]}
              textColor={currentMethod === 1 && Colors.DEFAULT_CORLOR}
              onPress={() => setCurrentMethod(1)}
            />
            <Button title="Đặt lịch theo chuyên khoa"
              style={[
                styles.methodItem,
                {
                  backgroundColor: currentMethod === 2 ? colorOFSchedule.activeBgrMethodItem : colorOFSchedule.inactiveBgrMethodItem,
                  borderWidth: currentMethod === 2 ? 1 : 0,
                },
              ]}
              textColor={currentMethod === 2 && Colors.DEFAULT_CORLOR}
              onPress={() => setCurrentMethod(2)}
            />
          </View>
          {currentMethod !== 0 && <View>
            {(speciality.specialityName || currentMethod === 2) && <Button title={speciality.specialityName ? speciality.specialityName : 'Chọn chuyên khoa'} disabled={(doctor.doctorName && currentMethod === 1) && true} style={styles.btnMethodItem} onPress={() => navigate('Speciality')} />}
            {(doctor.doctorName || currentMethod === 1) && <Button title={doctor.doctorName ? doctor.doctorName : 'Chọn bác sĩ'} style={styles.btnMethodItem} onPress={() => navigate('Doctor')} />}
          </View>}
        </View>
        <View style={styles.containerSchedule}>
          <View style={styles.containerTitle} >
            <Entypo name="chevron-right" size={27} color={colorOFSchedule.colorYellow} />
            <Text style={styles.titleContent}>Lịch hẹn</Text>
          </View>
          <View>
            <Text style={styles.titleContainer}>Ngày khám mong muốn</Text>
            <View style={styles.dateExamination}>
              <TouchableOpacity onPress={() => handleGetSchedule(1)} style={styles.btnDateItem}>
                <View style={[styles.dateItem, { backgroundColor: indexClickTime == 1 ? Colors.DEFAULT_CORLOR : colorOFSchedule.inactiveBgrMethodItem }]}>
                  <Text style={{ color: indexClickTime == 1 ? Colors.WHITE : Colors.BLACK }}>{`${dayTomorrow} ngày ${dateTomorrow}`}</Text>
                  <Text style={{ color: indexClickTime == 1 ? Colors.WHITE : Colors.BLACK }}>{`Thg ${monthTomorrow}`}</Text>
                </View>
                <Text style={styles.titleDateItem}>Ngày mai</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleGetSchedule(2)} style={styles.btnDateItem}>
                <View style={[styles.dateItem, { backgroundColor: indexClickTime == 2 ? Colors.DEFAULT_CORLOR : colorOFSchedule.inactiveBgrMethodItem }]}>
                  <Text style={{ color: indexClickTime == 2 ? Colors.WHITE : Colors.BLACK }}>{`${dayAfterTomorrow} ngày ${dateAfterTomorrow}`}</Text>
                  <Text style={{ color: indexClickTime == 2 ? Colors.WHITE : Colors.BLACK }}>{`Thg ${monthAfterTomorrow}`}</Text>
                </View>
                <Text style={styles.titleDateItem}>Ngày kia</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.btnDateItem}>
                {
                  (currentDate && indexClickTime == 3) ? <View style={[styles.dateItem, { backgroundColor: indexClickTime === 3 ? Colors.DEFAULT_CORLOR : colorOFSchedule.inactiveBgrMethodItem }]}>
                    <Text style={{ color: indexClickTime == 3 ? Colors.WHITE : Colors.BLACK }}>{`${moment(currentDate).format('dddd')} ngày ${moment(currentDate).format('DD')}`}</Text>
                    <Text style={{ color: indexClickTime == 3 ? Colors.WHITE : Colors.BLACK }}>{`Thg ${moment(currentDate).format('MM')}`}</Text>
                  </View>
                    :
                    <View style={[styles.dateItem, { backgroundColor: colorOFSchedule.inactiveBgrMethodItem }]}>
                      <MaterialIcons name="add" size={30} />
                    </View>
                }
                <Text style={styles.titleDateItem}>Ngày khác</Text>
              </TouchableOpacity>

            </View>
          </View >
          {loadingSchedule(listSchedule, currentDate)}

        </View>
        <View style={styles.containerReason}>
          <View style={styles.containerTitle} >
            <Entypo name="chevron-right" size={27} color={colorOFSchedule.colorYellow} />
            <Text style={styles.titleContent}>Lý do khám</Text>
          </View>
          <TextInput style={[styles.textInput, { backgroundColor: colorOFSchedule.inactiveBgrMethodItem }]}
            value={reasonForExamination}
            placeholder='Vui lòng mô tả rõ triệu chứng của bạn'
            onChangeText={setReasonForExaminationt}
            multiline={true}
          />
          <Button title="ĐẶT LỊCH"
            primary
            style={styles.btnBook}
            onPress={() => handleBookSchedule()}
          />
        </View>
      </View>
      {renderModal()}
    </ScrollView >

  );
};

export default Appointment;
