import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    fontFamily: Fonts.POPPINS_BOLD,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  containerMain: {
    width: '100%',
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  inputItem: {
    height: 65,
    width: 55,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 20,
    backgroundColor: Colors.GRAY,
    textAlign: 'center',
    color: Colors.BLACK,
  },
  btnVerify: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    backgroundColor: Colors.DEFAULT_CORLOR,
    alignItems: 'center',
    paddingVertical: 10,
    justifyContent: 'center',
    marginTop: 50,

  }

});
