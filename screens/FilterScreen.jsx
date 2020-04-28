import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FilterScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Fitler Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default FilterScreen;
