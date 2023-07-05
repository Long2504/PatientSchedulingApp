import { StyleSheet } from 'react-native';
import { Colors } from '../../constants';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.WHITE,
  },
  headerSearch: {
    height: 50,
    width: '100%',
    paddingLeft: 10,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  search: {
    width: '85%',
    height: 40,
    flexDirection: 'row',
    borderColor: '#000000',
    borderWidth: 0.5,
    borderRadius: 20,
    paddingLeft: 5,
    paddingRight: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    width: '10%',
    height: '100%',
    textAlignVertical: 'center',
    marginLeft: 5,
  },
  input: {
    width: '90%',
    textAlignVertical: 'center',
  },
  containerMain: {
    width: '100%',
    // backgroundColor: Colors.WH,
    paddingHorizontal: 12,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  viewModal: {
    width: '90%',
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 30,
    alignItems: 'center',

  },
  titleModal: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.DEFAULT_CORLOR,
    marginBottom: 20,
  },
  description: {
    height: 300,
  },
  btnClose: {
    width: 100,
    height: 50,
    borderRadius: 10,
    backgroundColor: Colors.DEFAULT_CORLOR,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  textClose: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.WHITE,
  }
});
