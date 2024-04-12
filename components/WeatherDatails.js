import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native';

const DetailsScreen = () => {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async () => {
    if (!cityName.trim()) return;
    const dummyData = {
      city: cityName,
      forecast: [
      ],
    };
    setWeatherData(dummyData);
    setCityName('');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.searchInput}
          placeholder="Entrer le nom d'une ville"
          value={cityName}
          onChangeText={setCityName}
        />
        <Button title="Rechercher" onPress={handleSearch} />
      </View>
      {weatherData && (
        <View style={styles.resultsSection}>
          <Text style={styles.cityName}>{weatherData.city}</Text>
          {weatherData.forecast.map((item, index) => (
            <View key={index} style={styles.forecastItem}>
              <Text style={styles.forecastText}>{`${item.day}: ${item.temp}, ${item.condition}`}</Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchSection: {
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  resultsSection: {
    marginTop: 20,
  },
  cityName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  forecastItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  forecastText: {
    fontSize: 16,
  },
});

export default DetailsScreen;
