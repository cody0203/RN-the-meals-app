import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import MealItem from './MealItem';

const MealList = ({ data, navigate }) => {
  const renderMealsList = ({ item }) => {
    return (
      <MealItem
        item={item}
        onPress={() =>
          navigate('MealDetail', {
            mealId: item.id,
          })
        }
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
  },
});

export default MealList;
