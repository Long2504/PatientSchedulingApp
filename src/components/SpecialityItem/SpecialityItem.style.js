import { StyleSheet } from 'react-native';
import { Colors } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: Colors.WHITE,
    borderRadius: 12,
    borderColor: Colors.DEFAULT_LIGHT_CORLOR,
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: "black",
  },
  textNameSpeciality: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.BLACK,
    marginBottom: 5,
  },
  textDescription: {
    fontSize: 14,
    color: Colors.BLACK,
    marginBottom: 5,
    lineHeight: 20,
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
