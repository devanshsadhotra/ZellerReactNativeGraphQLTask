import {StyleSheet} from 'react-native';
import {COLOR_BLACK, COLOR_LIGHT_GRAY} from './utils/colors';

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
      flexDirection: 'row',
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
});
