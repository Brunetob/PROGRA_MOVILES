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
          }}
          key={index}>
          <Image source={item} style={styles.image} />
        </Pressable>
      )}
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
 *  Cambios realizados:

Agregada documentación de propiedades y descripción del componente.
Importado React para mantener la consistencia en la aplicación.
Mejorada la legibilidad del código y la estructura de los comentarios.
 */