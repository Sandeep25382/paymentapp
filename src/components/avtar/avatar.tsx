import * as React from 'react';
import {Avatar} from 'react-native-paper';

const AvatarComponent = ({size}: {size: number}) => (
  <Avatar.Image size={size} source={require('../../../assets/images/cat.png')} />
);
export default AvatarComponent;
