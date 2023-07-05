import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants';

const AppointmentDetail = ({ route }) => {
  // id === 0 ? create : update
  const { id } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{id}</Text>
    </View>
  );
};

export default AppointmentDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    backgroundColor: Colors.WHITE,
    color: Colors.GREEN,
  },
});
