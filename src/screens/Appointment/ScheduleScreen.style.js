import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    fontFamily: Fonts.POPPINS_BOLD,
  },
  spaceX: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  spaceTop: {
    paddingTop: 20,
  },
  userInfo: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  username: {
    fontSize: Fonts.MEDIUM,
    marginLeft: 15,
  },
  categories: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  category: {
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appointment: {
    flex: 1.5,
    backgroundColor: Colors.WHITE,
  },
  text: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  list: {
    flex: 4,
    backgroundColor: Colors.WHITE,
  },
  colorText: {
    fontFamily: Fonts.POPPINS_BOLD,
    fontSize: Fonts.MEDIUM,
    color: Colors.DEFAULT_CORLOR,
  },
});
