import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';

import CustomHeaderButton from '../components/CustomHeaderButton';

const MealDetailScreen = ({ navigation }) => {
  const { getParam } = navigation;
  const mealId = getParam('mealId');

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  console.log(selectedMeal);

  return (
    <View style={styles.screen}>
      <Text>Meal Detail Screen</Text>

      <Button
        title="Go back to Categories"
        onPress={() => navigation.popToTop('Categories')}
      />
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

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('mealId');

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,

    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Favorite"
            iconName="ios-star"
            onPress={() => console.log('Mark as favorite!')}
          />
        </HeaderButtons>
      );
    },
  };
};

export default MealDetailScreen;
