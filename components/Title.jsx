import React from 'react';

import { Text, StyleSheet } from 'react-native';

const Title = ({ children, style }) => {
  return (
    <Text numberOfLines={2} style={{ ...styles.title, ...style }}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
  },
});

export default Title;
