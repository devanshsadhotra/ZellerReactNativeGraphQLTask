import {StyleSheet} from 'react-native';
import {COLOR_BLACK, COLOR_LIGHT_GRAY, COLOR_PRIMARY, COLOR_SECONDARY} from '../../utils/colors';

export const styles = StyleSheet.create({
  listView: {
    marginTop: 10,
    flex:1
  },
  listUserTest: {
    fontSize: 20,
    fontWeight: '700',
    color: COLOR_BLACK,
    textTransform: 'capitalize',
  },
  line: {
    height: 1.5,
    backgroundColor: COLOR_LIGHT_GRAY,
    marginVertical: 20,
  },

    container: {
      padding: 16,
      flex: 1,
    },
    geographyTypeText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    radioContainer: {
      flexDirection: 'column',
      marginBottom: 16,
    },
    emptyResultsContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyResultsText: {
      fontSize: 16,
      color: '#888',
    },
    listItem: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    touchableOpacity: {
      elevation: 4,
      shadowColor: 'rgba(0, 0, 0, 0.2)',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 4,
      flexDirection: 'row', // Align logo and text horizontally
      alignItems: 'center', // Center logo and text vertically
    },
    logoContainer: {
      backgroundColor: COLOR_PRIMARY, // Example background color for the logo container
      width: 50, // Adjust the size as needed
      height: 50, // Adjust the size as needed
     
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12, // Add spacing between logo and text
    },
    logoText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: COLOR_SECONDARY, // Text color for the logo
    },
    countryName: {
      fontSize: 18,
    },
  
});
