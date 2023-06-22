import React, { useState } from 'react';
import { SafeAreaView, Text, View, Alert } from 'react-native';
import MyTextInput from '../../components/MyTextInput';
import { styles } from './Login.styles';
import Button from '../../components/Button';
import { Colors } from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { Login } from '../../redux/action/auth.action';
const LoginScreen = ({ navigation: { navigate } }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  const [checkValidEmail, setCheckValidEmail] = useState(false);

  const handleCheckEmail = e => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    // setEmail(e);
    // if (re.test(e) || regex.test(e)) {
    //   setCheckValidEmail(false);
    // } else {
    //   setCheckValidEmail(true);
    // }
  };

  const checkPasswordValidity = value => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return 'Mật khẩu không bao gồm khoảng trống';
    }
    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(value)) {
      return 'Mật khẩu dài tối thiểu 8 ký tự, và tối đa 16 ký tự.';
    }
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return 'Mật khẩu phải bao gồm chữ viết thường, chữ viết hoa và số.';
    }
    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return 'Mật khẩu phải bao gồm chữ viết thường, chữ viết hoa và số.';
    }
    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      return 'Mật khẩu phải bao gồm chữ viết thường, chữ viết hoa và số.';
    }
    return null;
  };

  const dispath = useDispatch();

  const handleLogin = () => {
    dispath(Login({ username: "long", password: "1" }))
    // const checkPassowrd = checkPasswordValidity(password);
    // if (!checkPassowrd) {
    //   Alert.alert('Thông báo', 'OK');
    // } else {
    //   Alert.alert('Thông báo', checkPassowrd);
    // }
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.login}>Login here</Text>
          <Text style={styles.welcome}>
            Chào mừng quay trở lại với HealthCare
          </Text>
        </View>
        <View>
          <View style={styles.wrapperInput}>
            <MyTextInput
              placeholder="Email"
              keyboardType="email-address"
              value={email}
            // onChangeText={e => handleCheckEmail(e)}
            />
          </View>
          {checkValidEmail ? (
            <Text style={styles.textFailed}>Email không hợp lệ</Text>
          ) : (
            <Text style={styles.textFailed}> </Text>
          )}
          <View style={styles.wrapperInput}>
            <MyTextInput
              placeholder="Mật khẩu"
              value={password}
              secureTextEntry={seePassword}
            // onChangeText={e => setPassword(e)}
            />
            <View style={styles.wrapperIcon}>
              <Button
                title={
                  <Icon
                    name={seePassword ? 'eye' : 'eye-slash'}
                    size={20}
                    color={Colors.BLACK}
                  />
                }
              // onPress={() => setSeePassword(!seePassword)}
              />
            </View>
          </View>
        </View>
        <Button
          textAlign={'right'}
          title={'Bạn quên mật khẩu?'}
          textColor={Colors.GREEN}
          style={styles.spaceBottom}
        />
        <View style={styles.spaceBottom}>
          {email === '' || password === '' || checkValidEmail === true ? (
            <Button
              primary
              title={'Đăng nhập'}
              // disabled
              onPress={() => handleLogin()}
            />
          ) : (
            <Button primary title={'Đăng nhập'} onPress={() => handleLogin()} />
          )}
        </View>
        <Button
          title={'Tạo tài khoản mới'}
          onPress={() => navigate('Register')}
        />
        <View style={styles.other}>
          <Text style={styles.otherContent}>Hoặc đăng nhập với</Text>
          <View style={styles.iconGroup}>
            <Button
              title={<Icon name="facebook" size={20} color={Colors.BLACK} />}
              icon
            />
            <Button
              title={<Icon name="google" size={20} color={Colors.BLACK} />}
              icon
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
