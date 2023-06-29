import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    height: 100,
    position: 'relative',
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: Colors.DEFAULT_LIGHT_CORLOR,
    marginTop: 10,
    padding: 15,
    justifyContent: 'center',
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
