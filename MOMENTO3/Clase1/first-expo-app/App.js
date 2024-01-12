import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ImageViewer from  './components/ImageViewer'; // Clase 12/01/2024
import Button from './components/Button';

// Clase 12/101/2024
// IMportar una imagen
const PlaceholderImage = require('./assets/images/background-image.jpeg');


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource = {PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
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
    color: '#AAD926',// Se cambia el color de texto
  },
  imageContainer: { // Clases 12/01/2024
    flex: 1,
    paddingTop: 58,
  },
  image: { // Clases 12/01/2024
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: { // Clases 12/01/2024
    flex: 1 / 3,
    alignItems: 'center',
  },
});
