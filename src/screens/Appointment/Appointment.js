import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import Button from '../../components/Button';
import { styles } from './AppointmentStyle';
import { useState } from 'react';
import moment from 'moment';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Appointment = ({ navigation: { navigate } }) => {

  const [method, setMethod] = useState('');
  const handleSelectMethod = (method) => {
    setMethod(method);
  };
  const dayTomorrow = moment().add(1, 'days').format('dddd');
  const dateTomorrow = moment().add(1, 'days').format('DD');
  const monthTomorrow = moment().add(1, 'days').format('M');
  const dayAfterTomorrow = moment().add(2, 'days').format('dddd');
  const dateAfterTomorrow = moment().add(2, 'days').format('DD');
  const monthAfterTomorrow = moment().add(2, 'days').format('M');

  const date = "2012-03-29"
  // format date
  const formattedDate = moment(date).format('DD-MM-YYYY')

  const handleSelectedMethod = () => {
    if (method === 'Chọn bác sĩ') {
      navigate('Doctor');
    } else if (method === 'Chọn khoa') {
      navigate('Speciality');
    }
  };
  const [clickDate, setClickDate] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState([]);

  const handleDateSelect = (date) => {
    setSelectedDate([moment(date).format('dddd'), moment(date).format('DD'), moment(date).format('MM')]);
    setModalVisible(false);
  };
  console.log(selectedDate);
  function renderModal() {
    return (
      <Modal visible={isModalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={[styles.modalContainer]}>
          <View style={styles.calendarContainer} >
            <Text>Chọn ngày khám</Text>
            <Calendar
              onDayPress={(day) => handleDateSelect(day.dateString)}
              markedDates={{
                [selectedDate]: {
                  selected: true,
                  disableTouchEvent: true,
                  selectedColor: 'orange',
                  selectedTextColor: 'red',
                }
              }}
              minDate={moment().format('YYYY-MM-DD')}
              maxDate={moment().add(7, 'months').format('YYYY-MM-DD')}
            />
            <Button title="Chọn" onPress={() => handleDateSelect()} />
          </View>
        </View>
      </Modal>
    )
  }

  return (
    <View style={styles.container} >
      <View>
        <Text>Thông tin đặt lịch</Text>
        <View>
          <Text>Phương thức</Text>
          <View style={styles.methodExamination}>
            <Button title="Chọn bác sĩ" style={{ borderWidth: 1, padding: 3 }} onPress={() => handleSelectMethod('Chọn bác sĩ')} />
            <Button title="Chọn khoa" style={{ borderWidth: 1, padding: 3 }} onPress={() => handleSelectMethod('Chọn khoa')} />
          </View>
          <View>
            <Button title={method} style={{ borderWidth: 1, padding: 3 }} onPress={() => handleSelectedMethod()} />
          </View>
        </View>
        <View>
          <Text>Lịch hẹn</Text>
          <Text>Ngày khám mong muốn</Text>
          <View style={styles.dateExamination}>

            <TouchableOpacity >
              <View style={styles.dateItem}>
                <Text>{dayTomorrow}</Text>
                <Text>{dateTomorrow}</Text>
                <Text>{`Thg ${monthTomorrow}`}</Text>
              </View>
              <Text>Ngày mai</Text>
            </TouchableOpacity>

            <TouchableOpacity >
              <View style={styles.dateItem}>
                <Text>{dayAfterTomorrow}</Text>
                <Text>{dateAfterTomorrow}</Text>
                <Text>{`Thg ${monthAfterTomorrow}`}</Text>
              </View>
              <Text>Ngày kia</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              {
                selectedDate.length < 1 ? <View style={styles.dateItem}>
                  <MaterialIcons name="add" size={30} />
                </View>
                  :
                  <View style={styles.dateItem}>
                    <Text>{selectedDate[0]}</Text>
                    <Text>{selectedDate[1]}</Text>
                    <Text>{`Thg ${selectedDate[2]}`}</Text>
                  </View>
              }

              <Text>Ngày khác</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {renderModal()}
    </View >

  );
};

export default Appointment;
