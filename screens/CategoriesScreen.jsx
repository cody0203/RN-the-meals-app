import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import PressableCard from '../components/PressableCard';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = ({ navigation }) => {
  const { navigate } = navigation;

  const renderGridItem = (itemData) => (
    <PressableCard
      style={{
        ...styles.gridItem,
        ...{ backgroundColor: itemData.item.color },
      }}
      onPress={() =>
        navigate({
          routeName: 'CategoryMeals',
          params: {
            categoryId: itemData.item.id,
          },
        })
      }
      title={itemData.item.title}
    />
  );
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  gridItem: {
    height: 150,
    margin: 16,
  },
  list: {
    flexGrow: 1,
  },
});

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
};

export default CategoriesScreen;
