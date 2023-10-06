/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import GeographyTypeSelectorScreen from './screens/GeographyType/GeographyTypeSelectorScreen';
import CountryDetailScreen from './screens/CountryDetails/CountryDetailScreen';

// Create an Apollo Client instance
const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache(),
});

// Create a Stack Navigator
const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="GeographyTypeSelector"
          screenOptions={{
            headerMode: 'screen',
            headerTintColor: 'black',
            headerStyle: {backgroundColor: 'transparent'},
          }}>
          <Stack.Screen
            name="GeographyTypeSelector"
            component={GeographyTypeSelectorScreen}
            options={{
              title: 'The Geography',
            }}
          />
          {/* Add the new screen */}
          <Stack.Screen 
              name="CountryDetail" 
              component={CountryDetailScreen}  
              options={{
              title: 'Country/Continent Detail',
            }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
