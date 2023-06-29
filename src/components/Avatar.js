import React from 'react';
import { Pressable, StyleSheet, Image } from 'react-native';
import { Colors } from '../constants';

const Avatar = ({
  style,
  size = 60,
  rounded = false,
  circle = false,
  source,
  children,
  ...otherProps
}) => {
  const borderRadius = circle ? 0.5 * size : 12;

  const styles = StyleSheet.create({
    container: {
      width: size,
      height: size,
      borderRadius: borderRadius,
      borderColor: Colors.DEFAULT_CORLOR,
      borderWidth: 1,
      overflow: 'hidden',
    },
    image: {
      width: size,
      height: size,
      resizeMode: 'contain',
    },
  });

  return (
    <Pressable
      testID="avatar"
      style={[styles.container, style]}
      {...otherProps}>
      <Image style={styles.image} source={source} />
    </Pressable>
  );
};

export default Avatar;
