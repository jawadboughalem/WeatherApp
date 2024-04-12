import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import TemperatureScreen from '../screens/TemperatureScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Accueil' }} />
        <Stack.Screen name="Temperatures" component={TemperatureScreen} options={{ title: 'Températures des Villes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
