import React from 'react';
import { Colors, Fonts } from '../constants';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({
  title,
  primary = false,
  text = false,
  icon = false,
  textAlign,
  textColor,
  textSize,
  backgroundColor,
  borderColor,
  borderRadius,
  height,
  width,
  style,
  ...otherProps
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        primary && styles.primary,
        text && styles.text,
        icon && styles.icon,
        backgroundColor && { backgroundColor: backgroundColor },
        borderColor && { borderColor: borderColor },
        width && { width: width },
        height && { height: height },
        borderRadius && { borderRadius: borderRadius },
        style,
      ]}
      {...otherProps}>
      <Text
        style={[
          styles.textStyle,
          primary && styles.titlePrimary,
          text && styles.titleText,
          textColor && { color: textColor },
          textSize && { textSize: textSize },
          textAlign && { textAlign: textAlign },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
const styles = StyleSheet.create({
  button: {},
  textStyle: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: Fonts.SMALL,
    textAlign: 'center',
  },
  disable: {
    backgroundColor: Colors.BLACK,
  },
  primary: {
    padding: 10,
    backgroundColor: Colors.DEFAULT_CORLOR,
    borderRadius: 10,
    shadowColor: Colors.DEFAULT_CORLOR,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  titlePrimary: {
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.WHITE,
    textAlign: 'center',
    fontSize: Fonts.SMALL,
  },

  text: {
    textAlign: 'center',
  },
  titleText: {
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.BLACK,
    textAlign: 'center',
  },

  icon: {
    padding: 8,
    marginHorizontal: 10,
    backgroundColor: Colors.DEFAULT_LIGHT_CORLOR,
    height: 40,
    width: 40,
    borderRadius: 20,
    borderColor: Colors.DEFAULT_CORLOR,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
