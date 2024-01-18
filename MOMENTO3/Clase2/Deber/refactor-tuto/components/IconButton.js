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