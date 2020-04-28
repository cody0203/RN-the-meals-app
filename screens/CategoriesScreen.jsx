import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';

import Card from '../components/Card';
import { CATEGORIES } from '../data/dummy-data';

import theme from '../constants/theme';

const CategoriesScreen = ({ navigation }) => {
  const { navigate } = navigation;

  const renderGridItem = (itemData) => (
    <TouchableOpacity
      style={styles.gridItemWrapper}
      onPress={() =>
        navigate({
          routeName: 'CategoryMeals',
          params: {
            categoryId: itemData.item.id,
          },
        })
      }
    >
      <Card style={styles.gridItem}>
        <Text>{itemData.item.title}</Text>
      </Card>
    </TouchableOpacity>
  );
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
      contentContainerStyle={styles.gridItemContainer}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridItemContainer: {
    flexGrow: 1,
    alignItems: 'center',
    marginVertical: 24,
  },
  gridItemWrapper: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
    marginHorizontal: 24,
    marginVertical: 24,
  },
  gridItem: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? theme.primary : 'white',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : theme.primary,
};

export default CategoriesScreen;
