import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Show from './src/screens/Show';
import About from './src/screens/About';

const Stack = createNativeStackNavigator();

function App()
{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Show" component={Show} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;