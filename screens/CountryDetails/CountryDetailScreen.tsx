import React from 'react';
import { View, Text, } from 'react-native';
import { styles } from './style';

interface CountryDetailScreenProps {
  route: {
    params?: {
      country?: {
        name: string;
        emoji: string;
        currency: string;
        // Add more properties here as needed
      };
    };
  };
}

const CountryDetailScreen: React.FC<CountryDetailScreenProps> = ({ route }) => {
  const { country } = route.params || {};

  // Default values in case country is undefined
  const defaultCountry = {
    name: 'Country Name Not Available',
    emoji: '🌍', // Default emoji or any other value you prefer
    currency: 'Continents do not have currency',
  };

  const countryData = country || defaultCountry;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.countryName}>Name: {countryData.name}</Text>
        <Text style={styles.countryEmoji}>{countryData.emoji || defaultCountry.emoji}</Text>
      </View>
      <Text style={styles.currency}>Currency: {countryData.currency || defaultCountry.currency}</Text>
      {/* Add more details about the country as needed */}
    </View>
  );
};
export default CountryDetailScreen;
