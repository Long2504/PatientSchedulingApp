import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import { styles } from './MedicalRecord.style'
import { getAllMedicalRecord } from '../../redux/action/medicalRecord.action'
import Auth from '../../utils/helper/auth.helper'
function MedicalRecord({ navigation }) {
  const data = [
    {
      date: '12-12-2020',
      diagosisOfDoctor: 'Bệnh nhân bị viêm phổi (chuẩn đoán của bác sĩ)',
      diseaseProgression: 'Tiến trình bệnh',
      docType: 'patient',
      doctor: { doctorID: '123456789', name: 'Bùi Ngọc Phương Hòa' },
      medicalRecordID: 5,
      note: 'Ghi chú',
      patientID: '12233456789',
      prescription: 'Đơn thuốc',
      symptonOfDisease: 'Khó thở (triệu chứng)',
      treatmentProcess: 'Quá trình điều trị'
    },
    {
      date: '12-12-2020',
      diagosisOfDoctor: 'Bệnh nhân bị viêm phổi (chuẩn đoán của bác sĩ)',
      diseaseProgression: 'Tiến trình bệnh',
      docType: 'patient',
      doctor: { doctorID: '123456789', name: 'Bùi Ngọc Phương Hòa' },
      medicalRecordID: 5,
      note: 'Ghi chú',
      patientID: '12233456789',
      prescription: 'Đơn thuốc',
      symptonOfDisease: 'Khó thở (triệu chứng)',
      treatmentProcess: 'Quá trình điều trị'
    },
    {
      date: '12-12-2020',
      diagosisOfDoctor: 'Bệnh nhân bị viêm phổi (chuẩn đoán của bác sĩ)',
      diseaseProgression: 'Tiến trình bệnh',
      docType: 'patient',
      doctor: { doctorID: '123456789', name: 'Bùi Ngọc Phương Hòa' },
      medicalRecordID: 5,
      note: 'Ghi chú',
      patientID: '12233456789',
      prescription: 'Đơn thuốc',
      symptonOfDisease: 'Khó thở (triệu chứng)',
      treatmentProcess: 'Quá trình điều trị'
    },
    {
      date: '12-12-2020',
      diagosisOfDoctor: 'Bệnh nhân bị viêm phổi (chuẩn đoán của bác sĩ)',
      diseaseProgression: 'Tiến trình bệnh',
      docType: 'patient',
      doctor: { doctorID: '123456789', name: 'Bùi Ngọc Phương Hòa' },
      medicalRecordID: 5,
      note: 'Ghi chú',
      patientID: '12233456789',
      prescription: 'Đơn thuốc',
      symptonOfDisease: 'Khó thở (triệu chứng)',
      treatmentProcess: 'Quá trình điều trị'
    },
    {
      date: '12-12-2020',
      diagosisOfDoctor: 'Bệnh nhân bị viêm phổi (chuẩn đoán của bác sĩ)',
      diseaseProgression: 'Tiến trình bệnh',
      docType: 'patient',
      doctor: { doctorID: '123456789', name: 'Bùi Ngọc Phương Hòa' },
      medicalRecordID: 5,
      note: 'Ghi chú',
      patientID: '12233456789',
      prescription: 'Đơn thuốc',
      symptonOfDisease: 'Khó thở (triệu chứng)',
      treatmentProcess: 'Quá trình điều trị'
    },
    {
      date: '12-12-2020',
      diagosisOfDoctor: 'Bệnh nhân bị viêm phổi (chuẩn đoán của bác sĩ)',
      diseaseProgression: 'Tiến trình bệnh',
      docType: 'patient',
      doctor: { doctorID: '123456789', name: 'Bùi Ngọc Phương Hòa' },
      medicalRecordID: 5,
      note: 'Ghi chú',
      patientID: '12233456789',
      prescription: 'Đơn thuốc',
      symptonOfDisease: 'Khó thở (triệu chứng)',
      treatmentProcess: 'Quá trình điều trị'
    },
    {
      date: '12-12-2020',
      diagosisOfDoctor: 'Bệnh nhân bị viêm phổi (chuẩn đoán của bác sĩ)',
      diseaseProgression: 'Tiến trình bệnh',
      docType: 'patient',
      doctor: { doctorID: '123456789', name: 'Bùi Ngọc Phương Hòa' },
      medicalRecordID: 5,
      note: 'Ghi chú',
      patientID: '12233456789',
      prescription: 'Đơn thuốc',
      symptonOfDisease: 'Khó thở (triệu chứng)',
      treatmentProcess: 'Quá trình điều trị'
    },
    {
      date: '12-12-2020',
      diagosisOfDoctor: 'Bệnh nhân bị viêm phổi (chuẩn đoán của bác sĩ)',
      diseaseProgression: 'Tiến trình bệnh',
      docType: 'patient',
      doctor: { doctorID: '123456789', name: 'Bùi Ngọc Phương Hòa' },
      medicalRecordID: 5,
      note: 'Ghi chú',
      patientID: '12233456789',
      prescription: 'Đơn thuốc',
      symptonOfDisease: 'Khó thở (triệu chứng)',
      treatmentProcess: 'Quá trình điều trị'
    },
    {
      date: '12-12-2020',
      diagosisOfDoctor: 'Bệnh nhân bị viêm phổi (chuẩn đoán của bác sĩ)',
      diseaseProgression: 'Tiến trình bệnh',
      docType: 'patient',
      doctor: { doctorID: '123456789', name: 'Bùi Ngọc Phương Hòa' },
      medicalRecordID: 5,
      note: 'Ghi chú',
      patientID: '12233456789',
      prescription: 'Đơn thuốc',
      symptonOfDisease: 'Khó thở (triệu chứng)',
      treatmentProcess: 'Quá trình điều trị'
    },
    {
      date: '12-12-2020',
      diagosisOfDoctor: 'Bệnh nhân bị viêm phổi (chuẩn đoán của bác sĩ)',
      diseaseProgression: 'Tiến trình bệnh',
      docType: 'patient',
      doctor: { doctorID: '123456789', name: 'Bùi Ngọc Phương Hòa' },
      medicalRecordID: 5,
      note: 'Ghi chú',
      patientID: '12233456789',
      prescription: 'Đơn thuốc',
      symptonOfDisease: 'Khó thở (triệu chứng)',
      treatmentProcess: 'Quá trình điều trị'
    },
    {
      date: '12-12-2020',
      diagosisOfDoctor: 'Bệnh nhân bị viêm phổi (chuẩn đoán của bác sĩ)',
      diseaseProgression: 'Tiến trình bệnh',
      docType: 'patient',
      doctor: { doctorID: '123456789', name: 'Bùi Ngọc Phương Hòa' },
      medicalRecordID: 5,
      note: 'Ghi chú',
      patientID: '12233456789',
      prescription: 'Đơn thuốc',
      symptonOfDisease: 'Khó thở (triệu chứng)',
      treatmentProcess: 'Quá trình điều trị'
    },
  ]

  const { listMedicalRecord, error } = useSelector(state => state.medicalRecordSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMedicalRecord = async () => {
      try {
        const patientId = await Auth.getIdPatient();
        console.log(patientId, "patientId");
        if (patientId) {
          dispatch(getAllMedicalRecord({ patientId: patientId }));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchMedicalRecord();
  }, [])


  const loadMedicalRecord = (list) => {
    if (list.length > 0) {
      return list.map((medicalRecord, index) => {
        return (
          <TouchableOpacity key={index} style={styles.medicalRecord} onPress={() => navigation.navigate("MedicalRecordDetail", { medicalRecord })}>
            <Text style={styles.textMedicalRecord}>{`Thời gian :${medicalRecord.date}`}</Text>
            <Text>{`Bác sĩ :${medicalRecord.doctor.name}`}</Text>
            <Text style={styles.textLinkMR}>Xem thông tin chi tiết hồ sơ</Text>
          </TouchableOpacity>
        )
      })
    }
    else {
      return (
        <View style={styles.medicalRecord}>
          <Text style={styles.textMedicalRecord}>Không có hồ sơ bệnh án</Text>
        </View>
      )
    }
  }
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textTitle}>Danh sách hồ sơ bệnh án</Text>
      <View style={styles.containerMain}>
        {loadMedicalRecord(listMedicalRecord)}
      </View>

    </ScrollView>
  )
}

export default MedicalRecord