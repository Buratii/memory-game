import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, StatusBar } from 'react-native';

import Routes from './routes';
import AppProvider from './hooks';

function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        <StatusBar barStyle="light-content" backgroundColor="#10193a" />
        <View style={styles.container}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10193a',
  },
});

export default App;
