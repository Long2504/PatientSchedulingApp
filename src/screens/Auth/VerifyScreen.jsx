import React, { useRef, useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { styles } from './VerifyScreen.style';
import Button from '../../components/Button';
import { Colors } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { Verify, VerifyForgotPassword } from '../../redux/action/auth.action';
import AppHeader from '../../components/AppHeader/AppHeader';

const VerifyScreen = ({ navigation: { navigate }, route }) => {
  const { screen } = route.params;
  const inputRefs = useRef([]);
  const { username, email, isLoading } = useSelector(state => state.authSlice);
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const { error } = useSelector(state => state.authSlice);

  const handleCodeChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
  const dispatch = useDispatch();
  const handleVerify = async () => {
    const otp = code.join('');
    let check = otp ? parseInt(otp) : 0;
    if (check < 100000) {
      Alert.alert('Thông báo', 'Nhập đủ 6 số OTP');
      return;
    }
    if (screen === 'forgot') {
      try {
        await dispatch(VerifyForgotPassword({ username: username, confirmationCode: otp })).unwrap();
        navigate('NewPasswordScreen');
        return;
      } catch (error) {
        if (error.statusCode) {
          if (error.statusCode === 400) {
            Alert.alert('Thông báo', 'Mã OTP không đúng');
            return;
          }
          Alert.alert('Thông báo', error);
          return;
        }
      }
    }
    try {
      await dispatch(Verify({ username: username, confirmationCode: otp })).unwrap()
      navigate('LoginScreen');
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
  };

  return (
    <View style={styles.container}>
      <AppHeader
        back
        title={'Xác thực OTP'}
        headerBg={Colors.WHITE}
        iconColor={Colors.BLACK}
        titleAlight={"center"}
      />
      <View style={styles.content}>
        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Nhập mã OTP</Text>
        <View style={styles.containerMain}>
          <TextInput
            ref={ref => inputRefs.current[0] = ref}
            value={code[0]}
            onChangeText={text => handleCodeChange(text, 0)}
            keyboardType="numeric"
            maxLength={1}
            style={styles.inputItem}
          />
          <TextInput
            ref={ref => inputRefs.current[1] = ref}
            value={code[1]}
            onChangeText={text => handleCodeChange(text, 1)}
            keyboardType="numeric"
            maxLength={1}
            style={styles.inputItem}
          />
          <TextInput
            ref={ref => inputRefs.current[2] = ref}
            value={code[2]}
            onChangeText={text => handleCodeChange(text, 2)}
            keyboardType="numeric"
            maxLength={1}
            style={styles.inputItem}
          />
          <TextInput
            ref={ref => inputRefs.current[3] = ref}
            value={code[3]}
            onChangeText={text => handleCodeChange(text, 3)}
            keyboardType="numeric"
            maxLength={1}
            style={styles.inputItem}
          />
          <TextInput
            ref={ref => inputRefs.current[4] = ref}
            value={code[4]}
            onChangeText={text => handleCodeChange(text, 4)}
            keyboardType="numeric"
            maxLength={1}
            style={styles.inputItem}
          />
          <TextInput
            ref={ref => inputRefs.current[5] = ref}
            value={code[5]}
            onChangeText={text => handleCodeChange(text, 5)}
            keyboardType="numeric"
            maxLength={1}
            style={styles.inputItem}
          />
        </View>
        <Button title={'XÁC NHẬN'}
          primary
          style={styles.btnVerify}
          onPress={() => handleVerify()}
        />
      </View>
    </View>
  );
};

export default VerifyScreen;
