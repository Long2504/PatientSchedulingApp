import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, Alert, Image, TouchableWithoutFeedback, LayoutAnimation, Platform, Keyboard, UIManager, } from 'react-native';
import MyTextInput from '../../components/MyTextInput';
import { styles } from './Login.styles';
import Button from '../../components/Button';
import { Colors } from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from '../../redux/action/auth.action';
import Ionicons from 'react-native-vector-icons/Ionicons';
import logo from "../../../assets/logo.png";
import { IS_ANDROID } from '../../utils/constants/index.constants';

if (IS_ANDROID && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const LoginScreen = ({ navigation: { navigate } }) => {
  const [seePassword, setSeePassword] = useState(true);

  const { error, isLoading } = useSelector(state => state.authSlice)
  const [user, setUser] = useState({ username: '', password: '' });
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const dispath = useDispatch();

  const handleLogin = () => {
    if (!user.password || !user.username) {
      Alert.alert('Thông báo', 'Vui lòng điền tên đăng nhập và mật khẩu');
    } else {
      dispath(Login(user))
    }
  };
  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const hideSubscription = Keyboard.addListener(
      Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  useEffect(() => {
    if (IS_ANDROID) {
      LayoutAnimation.configureNext({
        duration: 200,
        update: { type: 'easeInEaseOut', property: 'opacity' },
      });
    }
  }, [isKeyboardVisible]);

  const handleErrors = () => {
    if (error) {
      if (error.statusCode === 404) {
        return 'Tên đăng nhập hoặc mật khẩu không đúng'
      }
      if (error.statusCode === 'ECONNABORTED' || error.statusCode === 'ERR_NETWORK') {
        return "Lỗi kết nối mạng"
      }
    }
    return ''
  };

  return (
    <TouchableWithoutFeedback
      style={{ backgroundColor: '#fff' }}
      onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.main}>
        <View style={styles.container}>
          <View style={styles.top}>
            {!isKeyboardVisible ? (
              <Image source={logo} style={styles.imageLogo} />
            ) : null}

            <Text style={styles.welcome}>
              Chào mừng quay trở lại với HealthCare
            </Text>
          </View>
          <View>
            <View style={styles.wrapperInput}>
              <MyTextInput
                Icon={Ionicons}
                nameIcon="person"
                sizeIcon={20}
                name="username"
                placeholder="Tên đăng nhập"
                onChangeText={e => setUser({ ...user, "username": e })}
              />
            </View>
            <View style={styles.wrapperInput}>
              <MyTextInput
                Icon={Ionicons}
                nameIcon="lock-closed"
                sizeIcon={20}
                placeholder="Mật khẩu"
                secureTextEntry={seePassword}
                name="password"
                onChangeText={e => setUser({ ...user, "password": e })}
                style={styles.inputItem}
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
                  onPress={() => setSeePassword(!seePassword)}
                />
              </View>
            </View>
          </View>
          <Button
            textAlign={'right'}
            title={'Bạn quên mật khẩu?'}
            textColor={Colors.DEFAULT_CORLOR}
            style={styles.btnForgot}
            onPress={() => navigate('ForgotPasswordScreen')}
          />
          <View style={styles.btnConfirm}>
            <Text style={styles.textError}>{handleErrors()}</Text>
            <Button
              primary
              title={'ĐĂNG NHẬP'}
              onPress={() => handleLogin()}
              disabled={isLoading}
              style={styles.btnConfirm}
            />
          </View>
          <Button
            title={'Tạo tài khoản mới'}
            onPress={() => navigate('RegisterScreen')}
            style={styles.btnRegister}
            textColor={Colors.DEFAULT_CORLOR}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
