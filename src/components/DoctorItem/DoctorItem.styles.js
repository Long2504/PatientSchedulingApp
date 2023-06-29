import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    height: 130,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    backgroundColor: Colors.WHITE,
    marginBottom: 5,
    padding: 5,
  },
  doctorInfo: {
    marginLeft: 20,
  },
  name: {
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_CORLOR,
    fontSize: Fonts.SMALL,
    width: 220,
  },
  department: {
    fontFamily: Fonts.POPPINS_LIGHT,
    color: Colors.DEFAULT_CORLOR,
    fontSize: Fonts.SMALL,
  },
});
