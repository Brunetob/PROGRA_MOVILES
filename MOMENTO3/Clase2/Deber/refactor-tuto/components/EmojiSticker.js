import { Gesture, GestureDetector } from 'react-native-gesture-handler'; // Add gesture
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'; // Add gesture



export default function EmojiSticker({ imageSize, stickerSource }) {
  const scaleImage = useSharedValue(imageSize); // Add gesture
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const drag = Gesture.Pan()
  .onChange((event) => {
    translateX.value += event.changeX;
    translateY.value += event.changeY;
  });


  const doubleTap = Gesture.Tap()
  .numberOfTaps(2)
  .onStart(() => {
    if (scaleImage.value !== imageSize * 2) {
      scaleImage.value = scaleImage.value * 2;
    }
  });

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });
  
  
  return (
    <GestureDetector gesture={drag}>
      <Animated.View style={[containerStyle, { top: -350 }]}>
        <GestureDetector gesture={doubleTap}>
          <Animated.Image
            source={stickerSource}
            resizeMode="contain"
            style={[imageStyle, { width: imageSize, height: imageSize }]}
          />
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  );
}

/*
 * Cambios:
El motivo por el cual no fue necesario realizar un refactor y mantener la estructura del código original del componente EmojiSticker es porque la implementación inicial ya utiliza las bibliotecas react-native-gesture-handler y react-native-reanimated de manera adecuada para lograr las funcionalidades necesarias del componente.

Aunque la versión refactorizada buscaba simplificar el código eliminando el uso de Animated.event, al hacerlo, se generaron errores debido a la incompatibilidad de las versiones o posiblemente a cambios en las API.

Dado que el código original ya cumple con los objetivos del componente y no presenta problemas significativos, mantener su estructura original con algunos comentarios adicionales para mejorar la comprensión es una decisión válida. En este caso, la refactorización no aporta beneficios adicionales y podría introducir riesgos innecesarios, por lo que se opta por mantener la implementación existente. 
*/