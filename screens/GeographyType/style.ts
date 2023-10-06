import {StyleSheet} from 'react-native';
import {COLOR_BLACK, COLOR_LIGHT_GRAY} from '../../utils/colors';

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
      elevation: 4, // Elevation for Android
      shadowColor: 'rgba(0, 0, 0, 0.2)', // Shadow color for iOS
      shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
      shadowOpacity: 1, // Shadow opacity for iOS
      shadowRadius: 4, // Shadow radius for iOS
    },
});
