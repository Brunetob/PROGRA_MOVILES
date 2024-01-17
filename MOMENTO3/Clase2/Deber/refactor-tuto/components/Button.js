import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

/**
 * Componente de botón personalizado.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.label - Texto del botón.
 * @param {string} props.theme - Tema del botón ("primary" o cualquier otro valor).
 * @param {Function} props.onPress - Función de retorno de llamada al presionar el botón.
 * @returns {JSX.Element} Elemento de React que representa el botón.
 */
export default function Button({ label, theme, onPress }) {
  // Renderiza el botón con tema primario o sin tema
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

  // Renderiza el botón sin tema
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

// Estilos del componente
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
 * Cambios realizados:

Agregada documentación de propiedades y descripción del componente.
Importado React para mantener la consistencia en la aplicación.
Mejorada la legibilidad del código y la estructura de los comentarios.
Se han agregado comentarios en el código para explicar ciertas secciones.

En general, el componente está bien implementado, y las sugerencias realizadas son principalmente para mejorar la documentación y la claridad del código. Si estás satisfecho con la funcionalidad y estructura actual del componente, no es necesario realizar cambios significativos. 
*/