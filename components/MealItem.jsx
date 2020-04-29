import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  ImageBackground,
} from 'react-native';

import Title from './Title';
import BodyText from './BodyText';

const MealItem = ({ item, onPress }) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.mealItem}>
      <TouchableComponent onPress={onPress}>
        <View>
          <View style={styles.header}>
            <ImageBackground
              style={styles.bgImage}
              source={{ uri: item.imageUrl }}
            >
              <View style={styles.titleOverlay}>
                <Title style={styles.title}>{item.title}</Title>
              </View>
            </ImageBackground>
          </View>

          <View style={styles.mealRow}>
            <BodyText>{item.duration}m</BodyText>
            <BodyText style={styles.capText}>{item.complexity}</BodyText>
            <BodyText style={styles.capText}>{item.affordability}</BodyText>
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    flex: 1,
    height: 200,
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  header: {
    height: '80%',
  },
  bgImage: {
    justifyContent: 'flex-end',
    height: '100%',
  },
  titleOverlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 5,
  },
  title: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  mealRow: {
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ddd',
    padding: 10,
  },
  capText: {
    textTransform: 'uppercase',
  },
});

export default MealItem;
