import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Hello World!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#B3FF70',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 24,
    color: '#B82A1A',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
