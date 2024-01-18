- [] --------------------------------- Desarrollar un informe en el archivo Readme.md del repositorio de Github ---------------------------------

                                                                                INFORME DE REFACTORIZACIÓN
***Generalizaicón de Cambios Realizados ***
-* EmojiList.js
  Separación de lógica: Se extrajo la lógica de renderizado del emoji en la función renderEmojiItem, lo que hace que la función principal (EmojiList) sea más concisa y fácil de entender.
  Manejo de eventos más claro: Se creó la función handleEmojiPress para manejar la lógica de selección de emoji y cierre del modal.
  Legibilidad mejorada: Nombres de funciones y variables ajustados para ser más descriptivos.
  Reducción de anidación: Se eliminó una capa de anidación al extraer la lógica en funciones separadas.
  Mejora de mantenibilidad: La refactorización facilita futuras modificaciones o extensiones del código.
-* Button.js
  Reducción de duplicación de código: Uso de variables para almacenar estilos comunes, reduciendo la duplicación de código.
  Claridad en la lógica: Separación de la lógica de creación de estilos en variables con nombres descriptivos.
  Mejor organización: Agrupación de estilos relacionados y lógica en variables para una estructura más limpia.
-* ImageViewer.js
  No se realizaron cambios significativos. La simplicidad actual del código es adecuada para su propósito.
-* EmojiPicker.js
  Claridad del código: El código original ya era claro y seguía buenas prácticas de desarrollo.
  Funcionalidad simple: El componente tiene una funcionalidad simple, y no había complejidad innecesaria.
-* EmojiSticker.js
  No fue necesario realizar un refactor debido a que la implementación original ya utiliza las bibliotecas adecuadamente para lograr las funcionalidades necesarias.
-* CircleButton.js
- Documentación para mejor entendimiento: Se agregaron comentarios para mejorar la comprensión del código.

- [] ---------------------------------Comparativas---------------------------------
* El antes de cada código
____ImageViewer.js____
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
____IconButter.js____
import { Pressable, StyleSheet, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function IconButton({ icon, label, onPress }) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: 12,
  },
});

____EmojiSticker.js____
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

____EmojiPicker.js____
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function EmojiPicker({ isVisible, children, onClose }) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Choose a sticker</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
    modalContent: {
      height: '25%',
      width: '100%',
      backgroundColor: '#25292e',
      borderTopRightRadius: 18,
      borderTopLeftRadius: 18,
      position: 'absolute',
      bottom: 0,
    },
    titleContainer: {
      height: '16%',
      backgroundColor: '#464C55',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      color: '#fff',
      fontSize: 16,
    },
    pickerContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 50,
      paddingVertical: 20,
    },
});

____EmojiList.js____
import { useState } from 'react';
import { StyleSheet, FlatList, Image, Platform, Pressable } from 'react-native';

export default function EmojiList({ onSelect, onCloseModal }) {
  const [emoji] = useState([
    require('../assets/images/emoji1.jpeg'),
    require('../assets/images/emoji2.jpeg'),
    require('../assets/images/emoji3.jpeg'),
    require('../assets/images/emoji4.jpeg'),
    require('../assets/images/emoji5.jpeg'),
    require('../assets/images/emoji6.jpeg'),
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}>
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});

____CircleButton.js____
import { View, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function CircleButton({ onPress }) {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable style={styles.circleButton} onPress={onPress}>
        <MaterialIcons name="add" size={38} color="#25292e" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: '#ffd33d',
    borderRadius: 42,
    padding: 3,
  },
  circleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 42,
    backgroundColor: '#fff',
  },
});

____BUtton.js____
import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ label, theme, onPress}) {
  if (theme === "primary") {
    return (
      <View style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]}>
        <Pressable
          style={[styles.button, { backgroundColor: '#fff' }]}
          onPress={onPress}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      {/*MOdal*/}
      <Pressable style={styles.button}  onPress={onPress} >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});

* El después de cada código:
____ImageViewer.js____
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

____IconButton.js____
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

/**
 * * Componente de botón con icono.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.icon - Nombre del icono a mostrar.
 * @param {string} props.label - Etiqueta del botón.
 * @param {Function} props.onPress - Función de retorno de llamada al presionar el botón.
 * @returns {JSX.Element} Elemento de React que representa el botón con icono.
*/
export default function IconButton({ icon, label, onPress }) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

// Estilos del componente
const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: 12,
  },
});
/*
 * Cambios realizados:

En general, para este componente no fue considerado realizar alguna refactorización más que añadir comentarios para una mejor comprensión de la funcionalidad.
Mas allá de lo que cumple este componente, siento que se podría tomar a consideración una refactorización del código en caso de querer que el componente maneje por su cuenta subfuncionalidades, pienso que quizás algún tipo de botón dinámico o un evento relacionado al 'onPress' como el tiempo de mantener presionado el botón.
*/

____EmojiSticker.js____
import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ label, theme, onPress }) {
  const containerStyle = theme === "primary"
    ? [styles.buttonContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]
    : styles.buttonContainer;

  const buttonStyle = theme === "primary"
    ? [styles.button, { backgroundColor: '#fff' }]
    : styles.button;

  const buttonLabelStyle = theme === "primary"
    ? [styles.buttonLabel, { color: "#25292e" }]
    : styles.buttonLabel;

  const renderIcon = theme === "primary" && (
    <FontAwesome
      name="picture-o"
      size={18}
      color="#25292e"
      style={styles.buttonIcon}
    />
  );

  return (
    <View style={containerStyle}>
      <Pressable style={buttonStyle} onPress={onPress}>
        {renderIcon}
        <Text style={buttonLabelStyle}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});

/*
 *Cambios realizados:

Reducción de duplicación de código: Antes, se tenía la misma lógica para los estilos y la creación de elementos JSX tanto en el bloque if como en el bloque else. Pero, al implementarle variables para almacenar los estilos comunes, se redujo la duplicación de código y se mejora la legibilidad de este.

Claridad en la lógica: Se separo la lógica de creación de estilos en variables con nombres descriptivos, con la intención de ser mas claro sobre el flujo en cada bloque. Las variables containerStyle, buttonStyle y buttonLabelStyle indican claramente el propósito de cada estilo y facilitan su comprensión.

Mejor organización: Al agrupar estilos relacionados y lógica en variables, el código se organiza de manera más limpia y estructurada. Esto facilita la lectura y la identificación de patrones.

Menos anidación: La refactorización elimina la necesidad de anidar ternarios, lo cual puede resultar confuso y propenso a errores. La lógica ahora es más plana y menos propensa a errores.

Facilita futuras modificaciones: Si es necesario ajustar o agregar estilos al componente, es más fácil hacerlo en un solo lugar (dentro de las variables) en lugar de hacerlo en varios lugares del código.
*/

____EmojiPicker.js____
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

/**
 * Componente de selector de emojis.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {boolean} props.isVisible - Indica si el selector de emojis es visible.
 * @param {React.ReactNode} props.children - Contenido del selector de emojis.
 * @param {Function} props.onClose - Función de retorno de llamada al cerrar el selector de emojis.
 * @returns {JSX.Element} Elemento de React que representa el selector de emojis.
*/
export default function EmojiPicker({ isVisible, children, onClose }) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Choose a sticker</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}

// Estilos del componente
const styles = StyleSheet.create({
  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: '#25292e',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
});


/*
 * Cambios realizados:
Claridad del código: El código original ya era bastante claro y seguía buenas prácticas de desarrollo. La estructura y la nomenclatura eran comprensibles, y no había redundancia ni complejidad innecesaria.

Funcionalidad simple: El componente EmojiPicker tiene una funcionalidad simple y directa: mostrar un modal con un título y un botón de cierre. No hay mucha lógica ni complicaciones en el código que requieran una reorganización significativa.
*/

____EmojiList.js____
import React from 'react';
import { useState } from 'react';
import { StyleSheet, FlatList, Image, Platform, Pressable } from 'react-native';

/**
 * Componente de lista de emojis.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {Function} props.onSelect - Función de retorno de llamada al seleccionar un emoji.
 * @param {Function} props.onCloseModal - Función de retorno de llamada al cerrar el modal.
 * @returns {JSX.Element} Elemento de React que representa la lista de emojis.
 */
export default function EmojiList({ onSelect, onCloseModal }) {
  const [emoji] = useState([
    require('../assets/images/emoji1.jpeg'),
    require('../assets/images/emoji2.jpeg'),
    require('../assets/images/emoji3.jpeg'),
    require('../assets/images/emoji4.jpeg'),
    require('../assets/images/emoji5.jpeg'),
    require('../assets/images/emoji6.jpeg'),
  ]);

  const handleEmojiPress = (item) => {
    onSelect(item);
    onCloseModal();
  };

  const renderEmojiItem = ({ item, index }) => (
    <Pressable onPress={() => handleEmojiPress(item)} key={index}>
      <Image source={item} style={styles.image} />
    </Pressable>
  );

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={renderEmojiItem}
    />
  );
}

// Estilos del componente
const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});

/*
Separación de lógica: Se extrajo la lógica de renderizado del emoji en la función renderEmojiItem, lo que hace que la función principal (EmojiList) sea más concisa y fácil de entender. Cada función ahora tiene una responsabilidad clara.

Manejo de eventos más claro: Se creó la función handleEmojiPress para manejar la lógica de selección de emoji y cierre del modal. Esto hace que la lógica de manejo de eventos sea más evidente y fácil de seguir.

Legibilidad mejorada: La función principal (EmojiList) ahora es más concisa, ya que se ha reducido la cantidad de lógica en línea. Los nombres de las funciones y variables también se han ajustado para ser más descriptivos y facilitar la comprensión.

Reducción de anidación: Se eliminó una capa de anidación al extraer la lógica en funciones separadas. Esto mejora la legibilidad y evita la anidación excesiva.

Mejora de mantenibilidad: La refactorización facilita futuras modificaciones o extensiones del código. La lógica de manejo de eventos y renderizado ahora está encapsulada en funciones separadas, lo que hace que el componente sea más modular y fácil de mantener.
 */

____CircleButton.js____
import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

/**
 * Componente de botón circular.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {Function} props.onPress - Función de retorno de llamada al presionar el botón.
 * @returns {JSX.Element} Elemento de React que representa el botón circular.
 */
export default function CircleButton({ onPress }) {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable style={styles.circleButton} onPress={onPress}>
        <MaterialIcons name="add" size={38} color="#25292e" />
      </Pressable>
    </View>
  );
}

// Estilos del componente
const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: '#ffd33d',
    borderRadius: 42,
    padding: 3,
  },
  circleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 42,
    backgroundColor: '#fff',
  },
});
x
/*
 * Cambios realizados:
  
  Entendiendo la funcionalidad del componente puedo decir que esta es de cierta manera, fácil de entender. Por lo que no se llevó a cabo mayor refactorización que añadir comentarios para mejor comprensión de propiedades y característicaas de etiquetas, entonces la refactorización completa no fue considerada necesaria debido a las siguientes razones:

  Claridad del código: El código original ya era bastante claro. La estructura y la nomenclatura eran comprensibles, y no detecté reduncia ni el código de este componente ni en la aplicación en genral referente a este.

  Funcionalidad simple: El componente CircleButton tiene una funcionalidad simple y directa: muestra un botón circular con un ícono.
*/

____BUtton.js____
import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ label, theme, onPress }) {
  const containerStyle = theme === "primary"
    ? [styles.buttonContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]
    : styles.buttonContainer;

  const buttonStyle = theme === "primary"
    ? [styles.button, { backgroundColor: '#fff' }]
    : styles.button;

  const buttonLabelStyle = theme === "primary"
    ? [styles.buttonLabel, { color: "#25292e" }]
    : styles.buttonLabel;

  const renderIcon = theme === "primary" && (
    <FontAwesome
      name="picture-o"
      size={18}
      color="#25292e"
      style={styles.buttonIcon}
    />
  );

  return (
    <View style={containerStyle}>
      <Pressable style={buttonStyle} onPress={onPress}>
        {renderIcon}
        <Text style={buttonLabelStyle}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});

/*
 *Cambios realizados:

Reducción de duplicación de código: Antes, se tenía la misma lógica para los estilos y la creación de elementos JSX tanto en el bloque if como en el bloque else. Pero, al implementarle variables para almacenar los estilos comunes, se redujo la duplicación de código y se mejora la legibilidad de este.

Claridad en la lógica: Se separo la lógica de creación de estilos en variables con nombres descriptivos, con la intención de ser mas claro sobre el flujo en cada bloque. Las variables containerStyle, buttonStyle y buttonLabelStyle indican claramente el propósito de cada estilo y facilitan su comprensión.

Mejor organización: Al agrupar estilos relacionados y lógica en variables, el código se organiza de manera más limpia y estructurada. Esto facilita la lectura y la identificación de patrones.

Menos anidación: La refactorización elimina la necesidad de anidar ternarios, lo cual puede resultar confuso y propenso a errores. La lógica ahora es más plana y menos propensa a errores.

Facilita futuras modificaciones: Si es necesario ajustar o agregar estilos al componente, es más fácil hacerlo en un solo lugar (dentro de las variables) en lugar de hacerlo en varios lugares del código.
*/

- [] ---------------------------------PREGUNTAS FiNALES---------------------------------
1. Problemas específicos de rendimiento o mantenibilidad en la aplicación original:
La aplicación original tenía cierta redundancia y falta de claridad en la estructura del código, lo que podría dificultar el mantenimiento y la comprensión.

2. Asegurando que el refactoring no afectara negativamente la funcionalidad existente:
Se realizaron varias pruebas después de cada refactorización para garantizar que la funcionalidad existente no se viera afectada.

3. Mejoras de rendimiento y mantenibilidad logradas:
Reducción de duplicación de código, claridad en la lógica, mejor organización y documentación para facilitar el mantenimiento.

4. Desafíos más significativos durante el proceso de refactoring:
Asegurar la compatibilidad entre diferentes versiones de bibliotecas y superar errores inesperados durante la refactorización.

5. Impacto en la experiencia del usuario final:
No se introdujeron cambios notables en la experiencia del usuario final. El único resaltable fue el de
la splashscreen al momento de carga la aplicación o realizar cambios como agregar una imagen

6. Lecciones aprendidas aplicables a futuros proyectos:
La importancia de pruebas exhaustivas después de cada cambio.
La documentación y la claridad del código son muy importantes para facilitar el mantenimiento.
También tomar en consideración la importancia de la modularización, ya que durante el proceso de refactorización
de cada componente, al tenerlos por separado con sus funcionalidades, que si bien, ciertos
estilos compartían o eran parecidos como Button.js y IconButton.js, a la hora de hacer pruebas
y si tenían error,e ra fácil de identificar ya que la ruta especificada en el mensaje de error o de warnning
eran cortas y eran en un número de línea pequeño, com en la línea 7 o 10, siendo que si se hubiera
mantenido ambos componentes Button y IconButton en un solo archivo, podría resultar más larga la búsqueda de error
o el refactor al compartir ambos Buttons era más complicado y no hubiera sido tan mantenible para
posibles actualizaciones y a la final si o si hubiera tenido que modularizar. Con esto dicho,
siento que tomar todo esto en cuenta para futuros proyectos, este tipo de prácticas deberían ser
aplicadas desde el principio por escalabilidad y mantenimiento.
