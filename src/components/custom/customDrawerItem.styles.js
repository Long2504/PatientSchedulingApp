import { StyleSheet } from 'react-native';

export const drawerItemStyles = StyleSheet.create({
  drawerStyle: {
    borderBottomColor: '#0000001A',
    borderBottomWidth: 1,
    borderRadius: 0,
    marginHorizontal: 0,
    marginVertical: 0,
  },
  child: {
    borderBottomColor: '#0000001A',
    borderBottomWidth: 1,
    borderRadius: 0,
    marginVertical: 0,
  },
  header: {
    height: 200,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    resizeMode: 'cover',
    borderWidth: 8,
    borderColor: '#fff',
  },
  nameView: {
    backgroundColor: '#fff',
    width: 180,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  drawerTitle: { fontWeight: 'bold', color: '#000', marginLeft: 5 },
  drawerLable: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
});
