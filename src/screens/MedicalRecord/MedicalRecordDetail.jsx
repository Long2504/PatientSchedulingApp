import React from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import { styles } from './MedicalRecordDetail.style'
import { Colors } from '../../constants';
import AppHeader from '../../components/AppHeader/AppHeader';
function MedicalRecordDetail({ route }) {
  const { medicalRecord } = route.params
  return (
    <ScrollView style={styles.container}>
      <AppHeader
        back
        title={'Hồ sơ bệnh án'}
        headerBg={Colors.DEFAULT_CORLOR}
        iconColor={Colors.WHITE}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.label}>Ngày khám:</Text>
          <Text style={styles.text}>{medicalRecord.date}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Bác sĩ điều trị:</Text>
          <Text style={styles.text}>{medicalRecord.doctor.name}</Text>
        </View>

        <View style={styles.fieldItem}>
          <Text style={styles.fieldItemLabel}>Triệu chứng</Text>
          <Text style={styles.fieldItemText}>{medicalRecord.symptonOfDisease}</Text>
        </View>
        <View style={styles.fieldItem}>
          <Text style={styles.fieldItemLabel}>Tiến trình bệnh:</Text>
          <Text style={styles.fieldItemText}>{medicalRecord.diseaseProgression}</Text>
        </View>
        <View style={styles.fieldItem}>
          <Text style={styles.fieldItemLabel}>Chuẩn đoán của bác sĩ:</Text>
          <Text style={styles.fieldItemText}>{medicalRecord.diagosisOfDoctor}</Text>
        </View>
        <View style={styles.fieldItem}>
          <Text style={styles.fieldItemLabel}>Đơn thuốc:</Text>
          <Text style={styles.fieldItemText}>{medicalRecord.prescription}</Text>
        </View>
        <View style={styles.fieldItem}>
          <Text style={styles.fieldItemLabel}>Quá trình điều trị:</Text>
          <Text style={styles.fieldItemText}>{medicalRecord.treatmentProcess}</Text>
        </View>
        <View style={styles.fieldItem}>
          <Text style={styles.fieldItemLabel}>Ghi chú:</Text>
          <Text style={styles.fieldItemText}>{medicalRecord.note}</Text>
        </View>
      </View>

    </ScrollView>
  )
}

export default MedicalRecordDetail