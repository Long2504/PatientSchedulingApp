import { StyleSheet } from 'react-native';
import { Colors } from '../../constants';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
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
    height: '100%',
    alignItems: 'center',

  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  titleContent: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.BLACK,
  },
  titleContainer: {
    fontSize: 18,
    fontWeight: 'semibold',
    color: Colors.BLACK,

  },
  containerMethod: {
    width: '100%',
    paddingHorizontal: '5%',
    paddingTop: 10,
    paddingBottom: 20,
    marginTop: 10,
    backgroundColor: Colors.WHITE,

  },
  methodExamination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
  methodItem: {
    width: '48%',
    height: 50,
    borderRadius: 10,
    borderColor: Colors.DEFAULT_CORLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnMethodItem: {
    width: '100%',
    paddingHorizontal: 3,
    paddingVertical: 9,
    backgroundColor: '#eaeaea',
    marginTop: 5,
    borderRadius: 10,
  },
  containerSchedule: {
    width: '100%',
    paddingHorizontal: '5%',
    paddingTop: 10,
    paddingBottom: 20,
    marginTop: 10,
    backgroundColor: Colors.WHITE,
  },
  dateExamination: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  btnDateItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateItem: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  titleDateItem: {
    fontSize: 16,
    marginTop: 5,
  },

  containerScheduleTime: {
    width: '100%',
    marginTop: 20,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  calendarContainer: {
    width: '100%',
    height: "55%",
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  titleCalendar: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.BLACK,
    textAlign: 'center',
    marginBottom: 10,
  },
  timeExamination: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  btnTime: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    marginTop: 5,
  },
  containerReason: {
    width: '100%',
    marginTop: 10,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: '5%',
    paddingTop: 10,

  },

  textInput: {
    width: '100%',
    height: 100,
    lineHeight: 20,
    borderRadius: 10,
    marginVertical: 10,
    paddingLeft: 20,
    textAlignVertical: 'top'
  },

  btnBook: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: Colors.DEFAULT_CORLOR,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },

});
