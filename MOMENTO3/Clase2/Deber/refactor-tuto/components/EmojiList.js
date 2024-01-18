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