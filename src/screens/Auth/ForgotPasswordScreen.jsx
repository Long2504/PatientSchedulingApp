import React from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import AppHeader from '../../components/AppHeader/AppHeader';
import { Colors } from '../../constants';
import { styles } from './ForgotPawwordScreen.style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import { ForgotPassword } from '../../redux/action/auth.action';
import MyTextInput from '../../components/MyTextInput';
function ForgotPasswordScreen({ navigation: { navigate } }) {
  const [focused, setFocused] = useState(false);
  const [usename, setUsername] = useState('');
  const dispatch = useDispatch();
  const handleContinue = async () => {
    if (!usename) {
      Alert.alert('Thông báo', 'Vui lòng nhập tên đăng nhập');
      return;
    }
    try {
      await dispatch(ForgotPassword({ username: usename })).unwrap();
      navigate('VerifyScreen', { screen: 'forgot' })
    }
    catch (err) {
      if (err.statusCode) {
        if (err.statusCode === 400) {
          Alert.alert('Thông báo', 'Mã OTP không đúng');
          return;
        }
        Alert.alert('Thông báo', err);
        return;
      }
    };

  }
  return (
    <View style={styles.container}>
      <AppHeader
        back
        title={'Quên mật khẩu'}
        titleAlight={"center"}
        headerBg={Colors.WHITE}
        iconColor={Colors.BLACK}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Nhập tên đăng nhập của bạn</Text>
        <View style={styles.inputField}>
          <MyTextInput
            Icon={Ionicons}
            nameIcon="person"
            sizeIcon={20}
            maxLength={30}
            placeholder='Tên đăng nhập'
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <Button title='TIẾP TỤC'
          primary
          style={styles.btnContinue}
          onPress={() => handleContinue()}
        />
      </View>
    </View>
  )
}

export default ForgotPasswordScreen;