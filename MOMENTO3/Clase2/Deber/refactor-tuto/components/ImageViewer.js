import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
    const imageSource = selectedImage  ? { uri: selectedImage } : placeholderImageSource;

    return (
        <Image source={imageSource} style={styles.image} />
    );
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});
/*
 * Cambios
El componente ImageViewer es bastante simple y cumple su función de mostrar una imagen. En este caso, no hubo complejidad o redundancia en el código original que justifique un refactor.
*/