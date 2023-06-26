import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../constants';

export const styles = StyleSheet.create({
  spaceBottom: {
    marginBottom: 30,
  },
  main: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: Colors.WHITE,
  },
  top: {
    alignItems: 'center',
    marginBottom: 30,
  },
  login: {
    fontSize: Fonts.LARGE,
    color: Colors.GREEN,
    fontFamily: Fonts.POPPINS_BOLD,
    marginVertical: 20,
  },
  welcome: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: Fonts.MEDIUM,
    maxWidth: '80%',
    textAlign: 'center',
  },
  wrapperInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  wrapperIcon: {
    position: 'absolute',
    right: 0,
    padding: 10,
  },
  textFailed: {
    fontSize: Fonts.X_SMALL,
    alignSelf: 'flex-end',
    color: 'red',
    marginTop: 5,
    marginBottom: 10,
  },
  other: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '100%',
  },
  otherContainer: {},
  otherContent: {
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.GREEN,
    textAlign: 'center',
    fontSize: Fonts.SMALL,
  },
  iconGroup: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textError: {
    color: 'red',
    marginTop: 5,
    marginBottom: 10,
    textAlign: 'center',
  },
  btnForgot: {
    marginTop: 10,
  },
  btnConfirm: {
    marginTop: 50,
  },
  btnRegister: {
    marginTop: 25,
  },
});
