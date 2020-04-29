import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';

import CustomHeaderButton from '../components/CustomHeaderButton';
import BodyText from '../components/BodyText';
import Title from '../components/Title';

const MealDetailScreen = ({ navigation }) => {
  const { getParam } = navigation;
  const mealId = getParam('mealId');

  const selectedMeal = MEALS.filter((meal) => meal.id === mealId);

  const renderMealDetails = ({ item }) => {
    return (
      <View style={styles.mealDetails}>
        <View>
          <Image style={styles.mealImage} source={{ uri: item.imageUrl }} />
        </View>

        <View style={styles.mealRow}>
          <BodyText>{item.duration}m</BodyText>
          <BodyText style={styles.capText}>{item.complexity}</BodyText>
          <BodyText style={styles.capText}>{item.affordability}</BodyText>
        </View>

        {item.ingredients && (
          <View style={styles.ingredientContainer}>
            <Title style={styles.title}>Ingredients</Title>
            {item.ingredients.map((ingredient, index) => (
              <View style={styles.boxItem} key={index}>
                <BodyText style={styles.text}>{ingredient}</BodyText>
              </View>
            ))}
          </View>
        )}

        {item.steps && (
          <View style={styles.ingredientContainer}>
            <Title style={styles.title}>Ingredients</Title>
            {item.steps.map((ingredient, index) => (
              <View style={styles.boxItem} key={index}>
                <BodyText key={index} style={styles.text}>
                  Step {index + 1}: {ingredient}
                </BodyText>
              </View>
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={selectedMeal}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealDetails}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    marginVertical: 10,
    textAlign: 'center',
  },
  mealDetails: {
    flex: 1,
    marginTop: 10,
  },
  mealImage: {
    width: '100%',
    height: 200,
  },
  capText: {
    textTransform: 'uppercase',
  },
  mealRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
  },
  ingredientContainer: {
    margin: 15,
  },
  boxItem: {
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    marginVertical: 10,
  },
  text: {
    flexShrink: 1,
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
