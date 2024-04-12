import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherDetails = ({ weatherData }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.detailText}>Température: {weatherData.main.temp}°C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  detailText: {
    fontSize: 18,
  },
});

export default WeatherDetails;
