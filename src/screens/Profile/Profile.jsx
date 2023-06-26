import React, { useEffect } from "react";
import { ScrollView, Text, View, TextInput } from "react-native";
import { RadioButton } from 'react-native-paper';
import { styles } from "./Profile.style";
import { useDispatch, useSelector } from "react-redux";
import { getInfor } from "../../redux/action/auth.action";
import Button from '../../components/Button';


const Profile = () => {
  const [value, setValue] = React.useState('first');
  const { inforUser } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getInfor());
  }, []);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textTitle}>Thông tin cá nhân</Text>
      <View style={styles.containerMain}>
        <View style={styles.fieldItem}>
          <Text style={styles.fieldItemTitle}>
            Họ và tên <Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput
            value={inforUser.name}
            style={styles.fieldItemInput}
          />
        </View>
        <View style={styles.fieldItem}>
          <Text style={styles.fieldItemTitle}>
            Ngày tháng năm sinh <Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput
            value={inforUser.dateOfBirth}
            style={styles.fieldItemInput}
          />
        </View>
        <View style={styles.fieldItem}>
          <Text style={styles.fieldItemTitle}>
            Giới tính <Text style={{ color: "red" }}>*</Text>
          </Text>
          <View>
            <RadioButton.Group
              onValueChange={newValue => setValue(newValue)}
              value={value}
              style={styles.groupRadioBtn}
            >
              <View style={styles.radioBtnItem}>
                <RadioButton value="first" />
                <Text>Nam</Text>
              </View>
              <View style={styles.radioBtnItem}>
                <RadioButton value="second" />
                <Text>Nữ</Text>
              </View>
              <View style={styles.radioBtnItem}>
                <RadioButton value="third" />
                <Text>Khác</Text>
              </View>
            </RadioButton.Group>
          </View>
        </View>
        <View style={styles.fieldItem}>
          <Text style={styles.fieldItemTitle}>
            Số điện thoại <Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput
            value={inforUser.phone}
            style={styles.fieldItemInput}
          />
        </View>
        <View style={styles.fieldItem}>
          <Text style={styles.fieldItemTitle}>
            Email <Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput
            value={inforUser.email}
            style={styles.fieldItemInput}
          />
        </View>
        <View style={styles.fieldItem}>
          <Text style={styles.fieldItemTitle}>
            Địa chỉ <Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput
            value={inforUser.address}
            style={styles.fieldItemInput}
          />
        </View>
        <Button title="LƯU THÔNG TIN"
          primary
          onPress={() => handleBookSchedule()}
          style={styles.btnSave}
        />
      </View>
    </ScrollView>
  );
};

export default Profile;
