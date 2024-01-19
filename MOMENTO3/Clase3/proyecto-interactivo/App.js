import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function App() {
  const clickedYellow = () => {
    alert('Clicked on the yellow flag!');
  };
  const clickedBlue = () => {
    alert('Clicked on the blue flag!');
  };
  const clickedRed = () => {
    alert('Clicked on the red flag!');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={clickedYellow} style={[styles.yellow, styles.flag]}>
        <Text style={styles.flagText}>Amarillo</Text>
        <TouchableOpacity onPress={clickedBlue} style={[styles.blue, styles.flag]}>
          <Text style={styles.flagText}>Azul</Text>
          <TouchableOpacity onPress={clickedRed} style={[styles.red, styles.flag]}>
            <Text style={styles.flagText}>Rojo</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flag: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
  },
  yellow: {
    width: 400,
    height: 200,
    backgroundColor: 'yellow',
  },
  blue: {
    width: 300,
    height: 150,
    backgroundColor: 'blue',
    // top: '20%',
  },
  red: {
    width: 200,
    height: 75,
    backgroundColor: 'red',
    // top: '15%',
  },
  flagText: {
    fontSize: 20,
  },
});
