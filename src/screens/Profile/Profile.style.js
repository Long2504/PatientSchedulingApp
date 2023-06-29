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
    backgroundColor: Colors.WHITE,
    marginTop: 10,
    paddingHorizontal: '5%',
  },
  fieldItem: {
    width: '100%',
    marginTop: 15,
  },
  fieldItemTitle: {
    fontSize: 15,
    fontWeight: 'semibold',
    color: Colors.BLACK,
    marginBottom: 10,
  },
  fieldItemInput: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    borderColor: Colors.DEFAULT_CORLOR,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 17,
    color: Colors.BLACK,
  },
  fieldDateOfBirth: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    borderColor: Colors.DEFAULT_CORLOR,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  groupRadioBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  radioBtnItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.WHITE,
    width: '30%',
  },
  btnSave: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: Colors.DEFAULT_CORLOR,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  calendarContainer: {
    width: '100%',
    height: '50%',
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 10,
  },


});
