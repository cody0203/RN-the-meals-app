import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMeal = ({ navigation }) => {
  const { navigate, pop, getParam } = navigation;
  const categoryId = getParam('categoryId');

  const selectedCategory = 

  console.log(categoryId);

  return (
    <View style={styles.screen}>
      <Text>Category Meal</Text>
      <Button title="Go to Details!" onPress={() => navigate('MealDetail')} />

      <Button title="Go back" onPress={() => pop()} />
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
