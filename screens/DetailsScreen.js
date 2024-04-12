import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native';

const DetailsScreen = () => {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = 'dc8d2d260163a565be873de2ecdeb149'; 

  const handleSearch = async () => {
    if (!cityName.trim()) return;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${API_KEY}`;

    try {
      const response = await fetch(url);
      const result = await response.json();
      if (response.ok) {
        setWeatherData(transformWeatherData(result));
        setCityName(''); 
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const transformWeatherData = (data) => {
    return {
      city: data.city.name,
      forecast: data.list.slice(0, 5).map(item => ({
        day: new Date(item.dt * 1000).toLocaleDateString('fr-FR', { weekday: 'long' }),
        temp: `${Math.round(item.main.temp)}°C`,
        condition: item.weather[0].description,
      })),
    };
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
