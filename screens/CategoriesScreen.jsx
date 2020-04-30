import React from 'react';
import { StyleSheet, FlatList, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import PressableCard from '../components/PressableCard';
import CustomHeaderButton from '../components/CustomHeaderButton';
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
        navigate('CategoryMeals', {
          categoryId: itemData.item.id,
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

export const CategoriesScreenOptions = (navData) => {
  return {
    headerTitle: 'Meal Categories',
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

export default CategoriesScreen;
