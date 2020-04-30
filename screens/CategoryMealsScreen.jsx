import React from 'react';
import { View, StyleSheet } from 'react-native';
import { find, get, isEmpty } from 'lodash';

import MealList from '../components/MealList';
import { CATEGORIES } from '../data/dummy-data';
import { useSelector } from 'react-redux';
import Title from '../components/Title';

const CategoryMealsScreen = ({ navigation, route }) => {
  const { navigate } = navigation;
  const { categoryId } = route.params;

  const availableMeals = useSelector((store) =>
    get(store, 'mealsReducer.filteredMeals')
  );
  const meals = availableMeals.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  if (isEmpty(meals)) {
    return (
      <View style={styles.notFound}>
        <Title>No meals found, maybe check your filters?</Title>
      </View>
    );
  }

  return <MealList data={meals} navigate={navigate} />;
};

const styles = StyleSheet.create({
  notFound: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const CategoryMealsScreenOptions = (navigationData) => {
  const { categoryId } = navigationData.route.params;
  console.log(categoryId);
  const selectedCategory = find(CATEGORIES, { id: categoryId });

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealsScreen;
