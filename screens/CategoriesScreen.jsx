import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import Card from '../components/Card';
import { CATEGORIES } from '../data/dummy-data';

const renderGridItem = (itemData) => (
  <TouchableOpacity>
    <Card style={styles.gridItem}>
      <Text>{itemData.item.title}</Text>
    </Card>
  </TouchableOpacity>
);

const CategoriesScreen = ({ navigation }) => {
  const { navigate } = navigation;

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
  gridItem: {
    width: Dimensions.get('window').width / 3,
    height: 150,
    marginHorizontal: 24,
    marginVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default CategoriesScreen;
