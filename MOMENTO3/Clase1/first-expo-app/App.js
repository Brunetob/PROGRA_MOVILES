import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: '#D94626'}}>Open up App.js to start working on your app!</Text>
      <Text>Mensjae de prueba</Text>
      <Text style={styles.text}>Los cambios son instantáneos</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
    textDecorationColor: '#D94626'
  },
  text: {
    color: '#AAD926',// Cambiar el color del texto aquí
  },
});
