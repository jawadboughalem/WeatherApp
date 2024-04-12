import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { fetchWeather } from '../api/WeatherAPI';

const cities = [
  { name: "Paris", latitude: 48.8566, longitude: 2.3522 },
  { name: "Lyon", latitude: 45.7640, longitude: 4.8357 },
  { name: "Marseille", latitude: 43.2965, longitude: 5.3698 },
  { name: "Toulouse", latitude: 43.6045, longitude: 1.4440 },
  { name: "Nice", latitude: 43.7102, longitude: 7.2620 },
];

const TemperatureScreen = () => {
  const [cityTemps, setCityTemps] = useState([]);

  useEffect(() => {
    const fetchCitiesWeather = async () => {
      const weatherData = await Promise.all(cities.map(async city => {
        try {
          const data = await fetchWeather(city.latitude, city.longitude);
          return { name: city.name, temp: data.main.temp };
        } catch (error) {
          console.error(error);
          return { name: city.name, temp: "Erreur" }; 
        }
      }));
      setCityTemps(weatherData);
    };

    fetchCitiesWeather();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {cityTemps.map((city, index) => (
        <View key={index} style={styles.cityContainer}>
          <Text style={styles.cityName}>{city.name}</Text>
          <Text style={styles.cityTemp}>{`${city.temp} °C`}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2', 
  },
  cityContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  cityName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  cityTemp: {
    fontSize: 18,
    color: '#666666',
  },
});

export default TemperatureScreen;
