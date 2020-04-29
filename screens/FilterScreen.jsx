import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, Dimensions } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';

import CustomHeaderButton from '../components/CustomHeaderButton';
import FilterSwitch from '../components/FilterSwitch';
import Title from '../components/Title';

import * as actions from '../store/meals/meals.actions';

const FilterScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const { setParams } = navigation;
  const [filter, setFilter] = useState({
    glutenFree: false,
    lactoseFree: false,
    vegan: false,
    vegetarian: false,
  });

  const filterMealHandler = useCallback(() => {
    dispatch(actions.filterMeals(filter));
  }, [filter, dispatch]);

  useEffect(() => {
    setParams({ filterMealHandler: filterMealHandler });
  }, [filterMealHandler]);

  const changeFilterHandler = (fieldName) => {
    setFilter((filters) => {
      return { ...filters, [fieldName]: !filters[fieldName] };
    });
  };

  return (
    <View style={styles.screen}>
      <Title style={styles.title}>Available Filters / Restriction</Title>

      <FilterSwitch
        filterName="Gluten-free"
        filterStatus={filter.glutenFree}
        onChangeFilterHandler={changeFilterHandler.bind(this, 'glutenFree')}
      />

      <FilterSwitch
        filterName="Lactose-free"
        filterStatus={filter.lactoseFree}
        onChangeFilterHandler={changeFilterHandler.bind(this, 'lactoseFree')}
      />

      <FilterSwitch
        filterName="Vegan"
        filterStatus={filter.vegan}
        onChangeFilterHandler={changeFilterHandler.bind(this, 'vegan')}
      />

      <FilterSwitch
        filterName="Vegetarian"
        filterStatus={filter.vegetarian}
        onChangeFilterHandler={changeFilterHandler.bind(this, 'vegetarian')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: Dimensions.get('window').width < 400 ? 16 : 22,
    margin: 20,
    textAlign: 'center',
  },
});

FilterScreen.navigationOptions = (navData) => {
  const filterMealHandler = navData.navigation.getParam('filterMealHandler');

  return {
    headerTitle: 'Filter Meals',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Save" iconName="ios-save" onPress={filterMealHandler} />
      </HeaderButtons>
    ),
  };
};

export default FilterScreen;
