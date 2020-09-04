import React from 'react';
import { Text } from 'react-native';

const Title = props => {

  const {
    color,
    fontSize,
    fontWeight,
    children
  } = props;

  return (
    <Text style={{ color, fontSize, fontWeight}}>{children}</Text>
  );
}

export default Title;