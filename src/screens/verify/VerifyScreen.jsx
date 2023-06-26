import React, { useRef, useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { styles } from './VerifyScreen.style';
import Button from '../../components/Button';
import { Colors } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { Verify } from '../../redux/action/auth.action';
import AppHeader from '../../components/AppHeader/AppHeader';

const VerifyScreen = ({ navigation: { navigate } }) => {
  const inputRefs = useRef([]);
  const { username, error, isLoading } = useSelector(state => state.authSlice);
  console.log(username);
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const handleCodeChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
  const dispatch = useDispatch();
  const handleVerify = () => {
    const otp = code.join('');
    console.log(otp);

    console.log(error, 'error');
    dispatch(Verify({ username: username, confirmationCode: otp })).then(() => {
      if (error.statusCode) {
        // console.log(error.statusCode, "error.statusCode");
        if (error.statusCode === 400) {
          Alert.alert('Thông báo', 'Mã OTP không đúng');
          return;
        }
        Alert.alert('Thông báo', error);
        return;
      }
      navigate('LoginScreen');
    }).catch((err) => {
      Alert.alert('Thông báo', err);
      return;
    });
    console.log(error, 'error');
  };

  return (
    <View style={styles.container}>
      <AppHeader
        back
        title={'Xác thực OTP'}
        headerBg={Colors.DEFAULT_CORLOR}
        iconColor={Colors.WHITE}
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
