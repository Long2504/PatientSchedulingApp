import React, { useEffect } from "react";
import { ScrollView, Text, View, TextInput, Modal, Alert } from "react-native";
import { styles } from "./NewPasswordScreen.style";
import { useDispatch, useSelector } from "react-redux";

import Button from '../../components/Button';
import AppHeader from "../../components/AppHeader/AppHeader";
import { Colors } from "../../constants";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useState } from "react";
import { ResetPassword, changePassword } from "../../redux/action/auth.action";
const NewPasswordScreen = ({ navigation: { navigate } }) => {
  const [seePassword2, setSeePassword2] = useState(true);
  const [seePassword3, setSeePassword3] = useState(true);
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const { _id } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch()
  const handleChangePassword = async () => {
    if (!password || !rePassword) {
      Alert.alert("Thông báo", "Vui lòng nhập đầy đủ thông tin");
      return;
    }
    if (password !== rePassword) {
      Alert.alert("Thông báo", "Mật khẩu mới không trùng khớp");
      return;
    }
    try {
      await dispatch(ResetPassword({
        _id: _id, newPassword: password
      })).unwrap();
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 1000);
      navigate('LoginScreen');
    } catch (err) {
      if (err.statusCode) {
        if (err.statusCode === 401) {
          Alert.alert('Thông báo', "Mật khẩu cũ không đúng");
          return;
        }
        return;
      };
    }

  }
  console.log(password);


  return (
    <View style={styles.container}>
      <AppHeader
        back
        title={'Tạo mật khẩu mới'}
        headerBg={Colors.DEFAULT_CORLOR}
        iconColor={Colors.WHITE}
      />
      <Text style={styles.textTitle}>Tạo mật khẩu mới</Text>
      <View style={styles.containerMain}>
        <View style={styles.fieldItem}>
          <Text style={styles.fieldItemTitle}>
            Mật khẩu mới <Text style={{ color: "red" }}>*</Text>
          </Text>
          <View style={styles.fieldItemInput}>
            <TextInput
              style={styles.input}
              name="newPassword"
              placeholder="Mật khẩu mới"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="newPassword"
              secureTextEntry={seePassword2}
              enablesReturnKeyAutomatically
              onChangeText={text => setPassword(text)}
            />
            <Button
              title={
                <FontAwesome
                  name={seePassword2 ? 'eye' : 'eye-slash'}
                  size={20}
                  color={Colors.BLACK}
                />
              }
              onPress={() => setSeePassword2(!seePassword2)}
            />
          </View>
        </View>
        <View style={styles.fieldItem}>
          <Text style={styles.fieldItemTitle}>
            Nhập lại mật khẩu mới <Text style={{ color: "red" }}>*</Text>
          </Text>
          <View style={styles.fieldItemInput}>
            <TextInput
              style={styles.input}
              name="password"
              placeholder="Nhập lại mật khẩu mới"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="newPassword"
              secureTextEntry={seePassword3}
              enablesReturnKeyAutomatically
              onChangeText={text => setRePassword(text)}
            />
            <Button
              title={
                <FontAwesome
                  name={seePassword3 ? 'eye' : 'eye-slash'}
                  size={20}
                  color={Colors.BLACK}
                />
              }
              onPress={() => setSeePassword3(!seePassword3)}
            />
          </View>
        </View>
        <Button title="CẬP NHẬT"
          primary
          style={styles.btnSave}
          onPress={() => handleChangePassword()}
        />
      </View>
      <Modal
        visible={showSuccess}
        swipeDirection="left"
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Đổi mật khẩu thành công!</Text>
        </View>
      </Modal>
    </View>
  );
};

export default NewPasswordScreen;
