import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

const IconButtonComponent = ({
  size = 40,
  onPress,
}: {
  size?: number;
  onPress: () => void;
  buttonIcon?: string;
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.avatar, {width: size, height: size}]}>
    <Image
      source={require('../../assets/images/bell.png')}
      style={{width: size - 20, height: size - 20, resizeMode: 'cover'}}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IconButtonComponent;
