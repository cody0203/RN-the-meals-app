import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';

import MealsNavigator from './navigation/MeailsNavigator';
import store from './store/store';

enableScreens();

export default function App() {
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    ionicons: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <MealsNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});
