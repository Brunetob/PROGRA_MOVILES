import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

/**
 * Componente de botón con icono.
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

Agregada documentación de propiedades y descripción del componente.
Importado React para mantener la consistencia en la aplicación.
Mejorada la legibilidad del código y la estructura de los comentarios.
*/