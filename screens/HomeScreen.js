import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bienvenue sur WeatherApp</Text>
      <Button
        title="Voir les températures des villes"
        onPress={() => navigation.navigate('Temperatures')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
  },
  welcome: {
    fontSize: 22,
    marginBottom: 20,
    color: '#333',
  },
});

export default HomeScreen;
