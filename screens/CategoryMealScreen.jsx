import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoryMeal = () => {
  return (
    <View style={styles.screen}>
      <Text>Category Meal</Text>
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
export default CategoryMeal;
