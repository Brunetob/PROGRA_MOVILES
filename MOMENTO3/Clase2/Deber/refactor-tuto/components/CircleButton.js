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

Agregada documentación de propiedades y descripción del componente.
Importado React para mantener la consistencia en la aplicación.
Mejorada la legibilidad del código y la estructura de los comentarios.
En general, el componente está bien implementado y las sugerencias realizadas son principalmente para mejorar la documentación y la claridad del código. Si estás satisfecho con la funcionalidad y estructura actual del componente, no es necesario realizar cambios significativos. ¿Deseas continuar con el siguiente componente o hay algo más en el actual que te gustaría abordar?
 */