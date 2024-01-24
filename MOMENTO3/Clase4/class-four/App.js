import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Spoocky} from './components/Spoocky';
// import EmojiCounter from './components/EmojiCounter';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Spoocky/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


/*Crear un servidor desde springboot para poder hacer las peticiones desde arduino*/
/*tansk query*/
/*Para rutas Expo Router */
