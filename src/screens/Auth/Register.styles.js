import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../constants';

export const styles = StyleSheet.create({
  spaceBottom: {
    marginBottom: 20,
  },
  main: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.WHITE,
  },
  top: {
    alignItems: 'center',
  },
  register: {
    fontSize: Fonts.LARGE,
    color: Colors.GREEN,
    fontFamily: Fonts.POPPINS_BOLD,
  },
  text: {
    marginVertical: 10,
  },
  wrapperInput: {
    alignItems: 'center',
  },
  wrapperIcon: {
    position: 'absolute',
    right: 0,
    padding: 10,
  },
  textFailed: {
    fontSize: Fonts.X_SMALL,
    alignSelf: 'flex-end',
    color: 'red',
  },
  check: {
    marginRight: 5,
    alignSelf: 'flex-end',
  },
  other: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '100%',
  },
  otherContainer: {},
  otherContent: {
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.GREEN,
    textAlign: 'center',
    fontSize: Fonts.SMALL,
  },
  icon: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
