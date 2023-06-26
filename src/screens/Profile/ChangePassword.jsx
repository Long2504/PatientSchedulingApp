import React, { useEffect } from "react";
import { ScrollView, Text, View, TextInput } from "react-native";
import { styles } from "./ChangePassword.style";
import { useDispatch, useSelector } from "react-redux";

import Button from '../../components/Button';
import AppHeader from "../../components/AppHeader/AppHeader";
import { Colors } from "../../constants";

import { useState } from "react";
import { changePassword } from "../../redux/action/auth.action";
const ChangePassword = () => {

  const [password, setPassword] = useState({ password: "", newPassword: "" });
  const dispatch = useDispatch()
  const handleChangePassword = () => {
    dispatch(changePassword(password));
  }
  console.log(password);
  return (
    <View style={styles.container}>
      <AppHeader
        back
        title={'Đổi mật khẩu'}
        headerBg={Colors.DEFAULT_CORLOR}
        iconColor={Colors.WHITE}
      />
      <Text style={styles.textTitle}>Đổi mật khẩu</Text>
      <View style={styles.containerMain}>
        <View style={styles.fieldItem}>
          <Text style={styles.fieldItemTitle}>
            Mật khẩu cũ <Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput
            style={styles.fieldItemInput}
            name="password"
            placeholder="Mật khẩu cũ"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="newPassword"
            secureTextEntry
            enablesReturnKeyAutomatically
            onChangeText={text => setPassword({ ...password, "password": text })}
          />
        </View>
        <View style={styles.fieldItem}>
          <Text style={styles.fieldItemTitle}>
            Mật khẩu mới <Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput
            style={styles.fieldItemInput}
            name="newPassword"
            placeholder="Mật khẩu mới"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="newPassword"
            secureTextEntry
            enablesReturnKeyAutomatically
            onChangeText={text => setPassword({ ...password, "newPassword": text })}
          />
        </View>
        <View style={styles.fieldItem}>
          <Text style={styles.fieldItemTitle}>
            Nhập lại mật khẩu mới <Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput
            style={styles.fieldItemInput}
            name="password"
            placeholder="Nhập lại mật khẩu mới"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="newPassword"
            secureTextEntry
            enablesReturnKeyAutomatically
          />
        </View>
        <Button title="CẬP NHẬT"
          primary
          style={styles.btnSave}
          onPress={() => handleChangePassword()}
        />
      </View>
    </View>
  );
};

export default ChangePassword;
