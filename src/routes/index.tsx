import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Game from '../pages/Game';
import Leaderboard from '../pages/Leaderboard';

const Play = createStackNavigator();

const Routes = () => (
  <Play.Navigator screenOptions={{
    headerShown: false,
    cardStyle: {
      backgroundColor: '#10193a'
     }
  }}>
    <Play.Screen name='Home' component={Home} />
    <Play.Screen name='Game' component={Game} />
    <Play.Screen name='Leaderboard' component={Leaderboard} />
  </Play.Navigator>
);

export default Routes;
