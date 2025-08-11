import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

interface ConfirmationModalProps {
  visible: boolean;
  title?: string;
  message?: string;
  onClose: () => void;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  visible,
  title = 'Confirm',
  message = 'Are you sure?',
  onClose,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backdrop}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.message}>{message}</Text>

              <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button} onPress={onCancel}>
                  <Text style={styles.yesText}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.coloredButton}
                  onPress={onConfirm}>
                  <Text style={styles.noText}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 12,
    padding: 20,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: '#444',

    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 6,
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    borderColor: '#969696',
  },
  coloredButton: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 6,

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,

    backgroundColor: '#6C54FF',
  },

  yesText: {
    color: '#969696',
    fontWeight: 'bold',
    fontSize: 16,
  },
  noText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ConfirmationModal;
