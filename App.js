import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import TemperatureScreen from './screens/TemperatureScreen';
import DetailsScreen from './components/WeatherDatails';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Accueil' }} />
        <Stack.Screen name="Temperatures" component={TemperatureScreen} options={{ title: 'Températures des Villes🌥️' }} />
        <Stack.Screen name="Détails" component={DetailsScreen} options={{ title: 'Recherche ta ville préférée 😍' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
