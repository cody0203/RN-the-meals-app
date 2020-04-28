import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BodyText = ({ children, style }) => {
  return (
    <Text numberOfLines={2} style={{ ...styles.bodyText, ...style }}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  bodyText: {
    fontFamily: 'open-sans',
  },
});

export default BodyText;
