import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

import Title from './Title';

const PressableCard = ({ title, style, onPress }) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={{ ...style, ...styles.card }}>
      <TouchableComponent style={{ ...{ flex: 1 } }} onPress={onPress}>
        <View style={styles.container}>
          <Title style={styles.title}>{title}</Title>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.15)',
    padding: 10,
    borderRadius: 10,
  },
  card: {
    flex: 1,
    borderRadius: 10,

    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 3,
    overflow: 'hidden',
  },

  title: {
    color: 'white',
    fontSize: 16,
    textAlign: 'right',
  },
});

export default PressableCard;
