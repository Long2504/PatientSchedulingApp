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
  content: {
    flex: 1,
    // backgroundColor: Colors.WHITE,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  fieldItem: {
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    marginVertical: 5,
  },
  fieldItemLabel: {
    fontSize: 16,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingLeft: 10,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  fieldItemText: {
    fontSize: 16,
    padding: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.DEFAULT_CORLOR,
  },
  textContent: {
    fontSize: 16,
    color: Colors.DEFAULT_CORLOR,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.DEFAULT_CORLOR,
  },



});
