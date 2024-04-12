import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <ImageBackground
        source={require('../assets/appmeteo.webp')}
        style={styles.container}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.welcome}>Bienvenue sur WeatherApp</Text>
          <Button
            title="Voir les températures des villes"
            onPress={() => navigation.navigate('Temperatures')}
          />
        </View>
      </ImageBackground>
      <View style={styles.overlay}>
        <Text style={styles.details}>Détails d'une ville</Text>
        <Button
          title="Rechercher"
          onPress={() => navigation.navigate('Détails')}
        />
      </View >
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'right',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    padding: 20,
    borderRadius: 10,
  },
  welcome: {
    fontSize: 22,
    marginBottom: 20,
    color: '#333',
  },
  details: {
    fontSize: 22,
    marginBottom: 20,
    color: '#333',
  },
});

export default HomeScreen;
