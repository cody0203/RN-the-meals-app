import React from 'react';
import { View, Switch, Text, StyleSheet, Platform } from 'react-native';

import BodyText from './BodyText';
import theme from '../constants/theme';

const FilterSwitch = ({ filterName, filterStatus, onChangeFilterHandler }) => {
  return (
    <View style={styles.container}>
      <BodyText>{filterName}</BodyText>
      <Switch
        onValueChange={onChangeFilterHandler}
        value={filterStatus}
        trackColor={{ true: theme.primary }}
        thumbColor={Platform.OS === 'android' ? theme.primary : ''}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15,
  },
});

export default FilterSwitch;
