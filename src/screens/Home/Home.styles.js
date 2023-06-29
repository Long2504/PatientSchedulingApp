import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    fontFamily: Fonts.POPPINS_BOLD,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_CORLOR,
    justifyContent: 'center',
    borderBottomEndRadius: 999,
    borderBottomStartRadius: 999,
  },
  image: {
    borderWidth: 1,
    borderColor: Colors.WHITE,
    width: "90%",
    height: 170,
    borderRadius: 10,
    resizeMode: 'contain',
    shadowColor: Colors.BLACK,
    shadowOffset: { width: 4, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginTop: 20,
  },
  containerHeader: {
    marginTop: 20,
    width: '90%',
    height: 140,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginTop: 20,
    borderRadius: 10,
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: Colors.DEFAULT_CORLOR,
    height: 100,
  },
  itemIcon: {
    width: 60,
    height: 60,
    borderRadius: 999,
    backgroundColor: Colors.DEFAULT_LIGHT_CORLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textItemContainer: {
    color: Colors.BLACK,
    width: 100,
    textAlign: 'center',
    marginTop: 10,
  },
  body: {
    width: '100%',
    height: '100%',
    paddingHorizontal: '5%',
    marginTop: 20,
  },
  titleBody: {
    fontSize: Fonts.MEDIUM,
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.BLACK,
    fontWeight: 'bold',
  },
  containerBody: {
    width: '100%',
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  containerBodyItem: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    marginTop: 5
  },
  containerBodyItemImgae: {
    width: "35%",
    height: 90,
    borderRadius: 10,
  },
  containerBodyItemText: {
    width: "65%",
    fontSize: 15,
    paddingTop: 5,
    paddingHorizontal: 10,
    color: Colors.BLACK,
    fontFamily: Fonts.POPPINS_BOLD,
    fontWeight: 'bold',
    lineHeight: 23
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
