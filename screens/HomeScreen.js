import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/appmeteo.webp')}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.contentContainer}>
        <View style={styles.overlay}>
          <Text style={styles.welcome}>Bienvenue sur WeatherApp</Text>
          <Button
            title="Voir les températures des villes"
            onPress={() => navigation.navigate('Temperatures')}
          />
        </View>

        <View style={styles.flexGrow} />

        <View style={styles.overlay}>
          <Text style={styles.welcome}>Détails d'une ville</Text>
          <Button
            title="Rechercher"
            onPress={() => navigation.navigate('Détails')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  overlay: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
  },
  welcome: {
    fontSize: 24, 
    color: '#4A90E2', 
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20, 
  },
});

export default HomeScreen;
