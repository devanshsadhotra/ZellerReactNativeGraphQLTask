import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      },
      countryName: {
        flex: 1,
        fontSize: 24,
        fontWeight: 'bold',
      },
      countryEmoji: {
        fontSize: 50,
        marginLeft: 20,
      },
      currency: {
        fontSize: 18,
      },
});
