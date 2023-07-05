import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    height: 90,
    position: 'relative',
    backgroundColor: Colors.WHITE,
    borderRadius: 12,
    // borderWidth: 0.5,
    borderColor: Colors.DEFAULT_LIGHT_CORLOR,
    marginTop: 12,
    padding: 10,
    // justifyContent: 'center',
    borderColor: "black",
  },
  btnInfo: {
    width: 25,
    height: 25,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 5,
    top: 5,
  },
});
