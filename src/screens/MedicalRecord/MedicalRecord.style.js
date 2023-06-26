import { StyleSheet } from 'react-native';
import { Colors } from '../../constants';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    backgroundColor: Colors.WHITE,
    color: Colors.DEFAULT_CORLOR,
    paddingVertical: 10,
    borderTopWidth: 0.5,
  },
  containerMain: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: '5%',
  },
  medicalRecord: {
    width: '100%',
    backgroundColor: Colors.WHITE,
    paddingVertical: 20,
    borderRadius: 10,
    paddingLeft: 20,
    marginBottom: 10,
  },
  textMedicalRecord: {
    fontSize: 18,
    lineHeight: 30,
  },

  textLinkMR: {
    fontSize: 16,
    lineHeight: 30,
    color: Colors.DEFAULT_CORLOR,
    marginTop: 10,
  },




});
