import {StyleSheet} from 'react-native';
import {COLOR_GRAY} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
    elevation: 2, // Add shadow on Android
    shadowColor: 'rgba(0, 0, 0, 0.1)', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 1, // Shadow opacity for iOS
    shadowRadius: 4, // Shadow radius for iOS
  },
  input: {
    fontSize: 16,
  },
});
