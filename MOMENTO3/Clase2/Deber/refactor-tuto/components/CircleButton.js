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

/*
 * Cambios realizados:
  
  Entendiendo la funcionalidad del componente puedo decir que esta es de cierta manera, fácil de entender. Por lo que no se llevó a cabo mayor refactorización que añadir comentarios para mejor comprensión de propiedades y característicaas de etiquetas, entonces la refactorización completa no fue considerada necesaria debido a las siguientes razones:

  Claridad del código: El código original ya era bastante claro. La estructura y la nomenclatura eran comprensibles, y no detecté reduncia ni el código de este componente ni en la aplicación en genral referente a este.

  Funcionalidad simple: El componente CircleButton tiene una funcionalidad simple y directa: muestra un botón circular con un ícono.
*/