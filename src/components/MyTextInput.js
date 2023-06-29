import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Colors, Fonts } from '../constants';

const MyTextInput = ({
  Icon,
  nameIcon,
  sizeIcon,
  action,
  colorIcon,
  style,
  ...otherProps
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <View style={[styles.container, focused && styles.focused, style]} >
      {Icon && (
        <Icon
          name={nameIcon}
          size={sizeIcon}
          style={[{ color: colorIcon }]}
          color={Colors.BLACK}
        />
      )}
      <TextInput
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholderTextColor={Colors.BLACK}
        style={styles.input}
        {...otherProps}
      />
    </View>
  );
};

export default MyTextInput;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.DEFAULT_LIGHT_CORLOR,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  input: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: Fonts.SMALL,
    padding: 15,
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
