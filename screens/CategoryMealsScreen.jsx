import React from 'react';
import { find } from 'lodash';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

import MealItem from '../components/MealItem';
import MealList from '../components/MealList';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealsScreen = ({ navigation }) => {
  const { navigate, getParam } = navigation;
  const categoryId = getParam('categoryId');

  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  return <MealList data={meals} navigate={navigate} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = find(CATEGORIES, { id: categoryId });

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealsScreen;
