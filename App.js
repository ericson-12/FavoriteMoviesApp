import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import RebelWithoutACause from './src/RebelWithoutACause';
import Hook from './src/Hook';
import Goodfellas from './src/Goodfellas';
import Joker from './src/Joker';
import PulpFiction from './src/PulpFiction';
import IngloriousBasterds from './src/IngloriousBasterds';
import JohnWick from './src/JohnWick';
import RunningOnEmpty from './src/RunningOnEmpty';
import TheDeparted from './src/TheDeparted';
import TheDarkKnight from './src/TheDarkKnight';
import Login from './src/Login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} options={{ title: "Adam's 10 Favorite Movies" }} />
      <Stack.Screen name="1" component={RebelWithoutACause} options={{ title: "Rebel Without a Cause - 1955" }} />
      <Stack.Screen name="2" component={Hook} options={{ title: "Hook - 1991" }} />
      <Stack.Screen name="3" component={Goodfellas} options={{ title: "Goodfellas" }} />
      <Stack.Screen name="4" component={Joker} options={{ title: "Joker - 2019" }} />
      <Stack.Screen name="5" component={PulpFiction} options={{ title: "Pulp Fiction - 1994" }} />
      <Stack.Screen name="6" component={IngloriousBasterds} options={{ title: "Inglorious Basterds - 2009" }} />
      <Stack.Screen name="7" component={JohnWick} options={{ title: "John Wick - 2014" }} />
      <Stack.Screen name="8" component={RunningOnEmpty} options={{ title: "Running on Empty - 1988" }} />
      <Stack.Screen name="9" component={TheDeparted} options={{ title: "The Departed - 2006" }} />
      <Stack.Screen name="10" component={TheDarkKnight} options={{ title: "The Dark Knight - 2008" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
