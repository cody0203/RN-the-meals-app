import React from 'react';
import { get, isEmpty } from 'lodash';
import { View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import CustomHeaderButton from '../components/CustomHeaderButton';
import MealList from '../components/MealList';
import Title from '../components/Title';

const FavoritesScreen = ({ navigation }) => {
  const { navigate } = navigation;
  const { favoriteMeals } = useSelector((store) => get(store, 'mealsReducer'));

  return (
    <View style={styles.screen}>
      {isEmpty(favoriteMeals) ? (
        <View style={styles.emptyData}>
          <Title>No favorite meals found. Start adding some!</Title>
        </View>
      ) : (
        <MealList data={favoriteMeals} navigate={navigate} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
  emptyData: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Your Favorite Meals',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoritesScreen;
