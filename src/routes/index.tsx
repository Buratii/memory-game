import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Game from '../pages/Game';
import Leaderboard from '../pages/Leaderboard';

const Play = createStackNavigator();

const Routes = () => (
  <Play.Navigator screenOptions={{
    // headerShown: false,
    cardStyle: {
      backgroundColor: '#10193a'
    }
  }}>
    <Play.Screen name='Home' component={Home} options={{
      headerShown: false,
    }} />
    <Play.Screen name='Game' component={Game} options={{
      headerShown: false,
    }} />
    <Play.Screen name='Leaderboard' component={Leaderboard} options={{
      headerTintColor: '#fff',
      headerStyle: { backgroundColor: '#10193a' }
    }} />
  </Play.Navigator>
);

export default Routes;
