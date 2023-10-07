import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, FlatList, RefreshControl} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useQuery} from '@apollo/client';
import {styles} from './style';
import {STATIC_STRINGS} from '../../utils/constants';
import {CONTINENT_QUERY, COUNTRY_QUERY} from '../../gql/Query';
import {RadioButton, SearchInput} from '../../components';
import {TouchableOpacity} from 'react-native-gesture-handler';

type GeographyTypeSelectorScreenProps = {
  navigation: StackNavigationProp<any>;
};

interface Item {
  name: string;
  emoji:string;
}

const GeographyTypeSelectorScreen: React.FC<
  GeographyTypeSelectorScreenProps
> = ({navigation}) => {
  const [globalCountryContinentList, setglobalCountryContinentList] = useState<
    Item[]
  >([]);
  const [searchText, setSearchText] = useState<string>('');
  const [activeRadioBtn, setActiveRadioBtn] = useState<string>(
    STATIC_STRINGS.COUNTRY,
  ); // Setting it to "Country" for default selection
  const [refreshing, setRefreshing] = useState(false);
  const {
    data: countryData,
    loading: countryLoading,
    refetch: refetchCountryData,
  } = useQuery(COUNTRY_QUERY);
  const {data: continentData, loading: continentLoading} =
    useQuery(CONTINENT_QUERY);

  const fetchDataBasedOnRadioButton = () => {
    if (activeRadioBtn === STATIC_STRINGS.COUNTRY) {
      return countryData?.countries || [];
    } else if (activeRadioBtn === STATIC_STRINGS.CONTINENT) {
      return continentData?.continents || [];
    }
    return [];
  };
  const onRefresh = async () => {
    setRefreshing(true);

    // Fetch data based on the activeRadioBtn here
    if (activeRadioBtn === STATIC_STRINGS.COUNTRY) {
      try {
        await refetchCountryData();
      } catch (error) {
        console.error('Error refreshing data:', error);
      }
    }

    // Add similar logic for CONTINENT or any other data source

    setRefreshing(false);
  };

  const handleSearchTextChange = useCallback(
    (text: string) => {
      const filteredData = fetchDataBasedOnRadioButton().filter((item: Item) =>
        text.length > 0 ? item.name?.includes(text) : true,
      );
      setglobalCountryContinentList(filteredData);
    },
    [activeRadioBtn],
  );

  useEffect(() => {
    // Fetch the "Country" query data when the component mounts
    if (activeRadioBtn === STATIC_STRINGS.COUNTRY) {
      refetchCountryData();
    }
  }, [activeRadioBtn]);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (activeRadioBtn || searchText) {
        handleSearchTextChange(searchText);
      }
    }, 500);
    return () => clearTimeout(delay);
  }, [activeRadioBtn, handleSearchTextChange, searchText]);
  return (
    <View style={styles.container}>
      <Text style={styles.geographyTypeText}>{STATIC_STRINGS.THE_EARTH}</Text>
      <View style={styles.radioContainer}>
        <RadioButton
          label={STATIC_STRINGS.COUNTRY}
          onChange={(value: string) => setActiveRadioBtn(value)}
          activeButton={activeRadioBtn}
          radioSize={20}
        />
        <RadioButton
          label={STATIC_STRINGS.CONTINENT}
          onChange={(value: string) => setActiveRadioBtn(value)}
          activeButton={activeRadioBtn}
          radioSize={20}
        />
      </View>

      <SearchInput
        placeholder={STATIC_STRINGS.SEARCH_TEXT}
        onChangeText={setSearchText}
      />
      <View style={styles.listView}>
        {activeRadioBtn && (
          <Text style={styles.listUserTest}>{activeRadioBtn}</Text>
        )}
        {globalCountryContinentList.length === 0 ? (
          <Text style={styles.emptyResultsText}>No results found</Text>
        ) : (
          <FlatList
            bounces={false}
            showsVerticalScrollIndicator={false}
            data={globalCountryContinentList}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[styles.listItem, styles.touchableOpacity]}
                onPress={() => {
                  navigation.navigate('CountryDetail', { country: item });
                }}
              >
                <View style={styles.logoContainer}>
                  <Text style={styles.logoText}>{item.emoji ||item.name.charAt(0)}</Text>
                </View>
                <Text style={styles.countryName}>{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.name}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                tintColor="#000" // Change to your desired color
              />
            }
          />
        )}
      </View>
    </View>
  );
};

export default GeographyTypeSelectorScreen;
