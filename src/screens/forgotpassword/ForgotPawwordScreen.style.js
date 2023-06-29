import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    fontFamily: Fonts.POPPINS_BOLD,
  },
  title: {
    fontSize: Fonts.SMALL,
    fontFamily: Fonts.POPPINS_BOLD,
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 40,
    marginLeft: 20,
  },
  inputField: {
    width: '90%',
    backgroundColor: Colors.DEFAULT_LIGHT_CORLOR,
    borderRadius: 10,
    marginBottom: 20,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  btnContinue: {
    width: '90%',
    height: 50,
    marginHorizontal: '5%',
    marginTop: 20,
    justifyContent: 'center',
  }
});
