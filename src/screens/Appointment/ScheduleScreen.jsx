
import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { Colors } from '../../constants';
import AppHeader from '../../components/AppHeader/AppHeader';
import AppointmentItem from '../../components/AppointmentItem/AppointmentItem';
import { styles } from './ScheduleScreen.style';
import { useDispatch } from 'react-redux';
import { getScheduleByIdPatient } from '../../redux/action/schedule.action';
import { useSelector } from 'react-redux';
import Auth from '../../utils/helper/auth.helper';

const ScheduleScreen = ({ navigation: { navigate } }) => {
  const dispatch =useDispatch();
  const {listSchedule} = useSelector(state => state.scheduleSlice);
  useEffect(() => {
    (async () => {
      patientID = await Auth.getIdPatient();
      dispatch(getScheduleByIdPatient({patientID: patientID}));
    }
    )();
  }, []);
  return (
    <ScrollView style={styles.container} >
      <AppHeader
        back
        title={'Lịch đã đặt'}
        headerBg={Colors.WHITE}
        iconColor={Colors.BLACK}
        titleAlight={'center'}
      />
      <View style={[styles.appointment, styles.spaceX, styles.spaceTop]}>
        <AppointmentItem
          id={1}
          name={'BS. Moreyra Francisco Carlos'}
          department={'Tim mạch'}
          date={'03/07/2023'}
          time={'8:00'}
        />
      </View>
    </ScrollView >

  );
};

export default ScheduleScreen;
