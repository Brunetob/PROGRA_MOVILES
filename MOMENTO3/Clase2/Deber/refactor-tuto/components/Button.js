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