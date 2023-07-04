import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  headerSearch: {
    height: 50,
    width: '100%',
    paddingLeft: 10,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 0.5,
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
});
