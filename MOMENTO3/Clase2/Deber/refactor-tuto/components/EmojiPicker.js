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