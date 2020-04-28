import React from 'react';
import { find } from 'lodash';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

import MealItem from '../components/MealItem';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealsScreen = ({ navigation }) => {
  const { navigate, getParam } = navigation;
  const categoryId = getParam('categoryId');

  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  const renderMealsList = (itemData) => {
    return (
      <MealItem
        item={itemData.item}
        onPress={() => navigate({ routeName: 'MealDetail' })}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={meals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealsList}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = find(CATEGORIES, { id: categoryId });

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default CategoryMealsScreen;
