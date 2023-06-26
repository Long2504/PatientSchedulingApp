import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Colors, Fonts } from '../constants';

const MyTextInput = ({ style, ...otherProps }) => {
  const [focused, setFocused] = useState(false);
  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={Colors.BLACK}
      style={[styles.input, focused && styles.focused, style]}
      {...otherProps}
    />
  );
};

export default MyTextInput;
const styles = StyleSheet.create({
  input: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: Fonts.SMALL,
    padding: 15,
    backgroundColor: Colors.DEFAULT_LIGHT_CORLOR,
    borderWidth: 1,
    borderColor: Colors.DEFAULT_LIGHT_CORLOR,
    borderRadius: 5,
    width: '100%',
  },
  focused: {
    borderWidth: 1,
    borderColor: Colors.DEFAULT_CORLOR,
    shadowOffset: { width: 4, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});
