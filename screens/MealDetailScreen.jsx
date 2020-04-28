import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MealDetailScreen = ({ navigation }) => {
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

export default MealDetailScreen;
