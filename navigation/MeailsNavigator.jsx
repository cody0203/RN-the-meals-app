import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Platform, Dimensions } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen, {
  CategoriesScreenOptions,
} from '../screens/CategoriesScreen';
import CategoryMealsScreen, {
  CategoryMealsScreenOptions,
} from '../screens/CategoryMealsScreen';
import FavoritesScreen, {
  FavoritesScreenOptions,
} from '../screens/FavoritesScreen';
import FilterScreen, { FilterScreenOptions } from '../screens/FilterScreen';
import MealDetailScreen, {
  MealDetailScreenOptions,
} from '../screens/MealDetailScreen';

import theme from '../constants/theme';
import BodyText from '../components/BodyText';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? theme.primary : 'white',
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
    maxWidth: 200,
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : theme.primary,
  headerBackTitle: 'Back',
};

const MealsStackNavigator = createStackNavigator();

const MealsNavigator = () => {
  return (
    <MealsStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
      <MealsStackNavigator.Screen
        name="Categories"
        component={CategoriesScreen}
        options={CategoriesScreenOptions}
      />
      <MealsStackNavigator.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={CategoryMealsScreenOptions}
      />
      <MealsStackNavigator.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={MealDetailScreenOptions}
      />
    </MealsStackNavigator.Navigator>
  );
};

const FavoritesStackNavigator = createStackNavigator();

const FavoritesNavigator = () => {
  return (
    <FavoritesStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
      <FavoritesStackNavigator.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={FavoritesScreenOptions}
      />
      <FavoritesStackNavigator.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={MealDetailScreenOptions}
      />
    </FavoritesStackNavigator.Navigator>
  );
};

const mealsTabConfig = {
  tabBarIcon: (tabInfo) => (
    <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />
  ),
};

const favoritesTabConfig = {
  tabBarIcon: (tabInfo) => (
    <Ionicons name="ios-star" size={25} color={tabInfo.color} />
  ),
};

const MaterialBottomTabStackNavigator = createMaterialBottomTabNavigator();

const MaterialBottomTab = () => {
  return (
    <MaterialBottomTabStackNavigator.Navigator
      activeTintColor="white"
      shifting={false}
      barStyle={{ backgroundColor: theme.primary }}
    >
      <MaterialBottomTabStackNavigator.Screen
        name="Meals"
        component={MealsNavigator}
        options={mealsTabConfig}
      />
      <MaterialBottomTabStackNavigator.Screen
        name="Favorites"
        component={FavoritesNavigator}
        options={favoritesTabConfig}
      />
    </MaterialBottomTabStackNavigator.Navigator>
  );
};

const BottomTabStackNavigator = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <BottomTabStackNavigator.Navigator
      tabBarOptions={{
        activeTintColor: theme.secondary,
      }}
    >
      <BottomTabStackNavigator.Screen
        name="Meals"
        component={MealsNavigator}
        options={mealsTabConfig}
      />
      <BottomTabStackNavigator.Screen
        name="Favorites"
        component={FavoritesNavigator}
        options={favoritesTabConfig}
      />
    </BottomTabStackNavigator.Navigator>
  );
};

const TabsNavigator = Platform.OS === 'android' ? MaterialBottomTab : BottomTab;

const FilterStackNavigator = createStackNavigator();

const FilterNavigator = () => {
  return (
    <FilterStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
      <FilterStackNavigator.Screen name="Filter" component={FilterScreen} />
    </FilterStackNavigator.Navigator>
  );
};

const DrawerStackNavigator = createDrawerNavigator();

export const MainNavigator = () => {
  return (
    <DrawerStackNavigator.Navigator
      drawerContentOptions={{
        activeTintColor: theme.primary,
        labelStyle: {
          fontFamily: 'open-sans-bold',
        },
      }}
    >
      <DrawerStackNavigator.Screen
        name="TabNavigator"
        component={TabsNavigator}
        options={{ drawerLabel: 'Meals' }}
      />
      <DrawerStackNavigator.Screen
        name="Filter"
        component={FilterNavigator}
        options={FilterScreenOptions}
      />
    </DrawerStackNavigator.Navigator>
  );
};

// const FilterNavigator = createStackNavigator(
//   {
//     Filter: FilterScreen,
//   },
//   {
//     defaultNavigationOptions: defaultStackNavOptions,
//   }
// );

// const MainNavigator = createDrawerNavigator(
//   {
//     TabNavigator: {
//       screen: MealsFavTabNavigator,
//       navigationOptions: {
//         drawerLabel: 'Meals',
//       },
//     },
//     Filter: {
//       screen: FilterNavigator,
//       navigationOptions: {
//         drawerLabel: 'Filters',
//       },
//     },
//   },
//   {
//     contentOptions: {
// activeTintColor: theme.primary,
// labelStyle: {
//   fontFamily: 'open-sans-bold',
// },
//     },
//   }
// );

// export default createAppContainer(MainNavigator);
