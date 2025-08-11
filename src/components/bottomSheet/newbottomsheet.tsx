// import React, {useState} from 'react';
// import {
//   Modal,
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Pressable,
// } from 'react-native';
// import RecentRechargeInfoSheet from '../mobileRecharge/recentRechargeInfoSheet';

// // const data = [
// //   {
// //     id: '1',
// //     company: 'Rahul Basu',
// //     transactionID: '9987654321',
// //     amount: '123',
// //     date: '10 Jul 2025',
// //     status: 'pending',
// //     logo: '',
// //   },
// //   {
// //     id: '2',
// //     company: 'Rahul Basu',
// //     transactionID: '9987654321',
// //     amount: '123',
// //     date: '10 Jul 2025',
// //     status: 'pending',
// //     logo: '',
// //   },
// // ];

// const BottomSheetWithModal = () => {
//   const [visible, setVisible] = useState(false);

//   return (
//     <View style={styles.container}>
//       <Pressable style={styles.button} onPress={() => setVisible(true)}>
//         <Text style={styles.buttonText}>...</Text>
//       </Pressable>

//       <Modal
//         visible={visible}
//         animationType="slide"
//         transparent
//         onRequestClose={() => setVisible(false)}>
//         <TouchableOpacity
//           style={styles.backdrop}
//           activeOpacity={1}
//           onPressOut={() => setVisible(false)}>
//           <View style={styles.sheetContainer}>
//             <Text style={styles.sheetTitle}>Bottom Sheet</Text>

//             <TouchableOpacity
//               style={styles.closeButton}
//               onPress={() => setVisible(false)}>
//               <Text style={styles.closeButtonText}>Close</Text>
//             </TouchableOpacity>

//             <RecentRechargeInfoSheet
//               item={{
//                 id: '1',
//                 company: 'Rahul Basu',
//                 transactionID: '9987654321',
//                 amount: '123',
//                 date: '10 Jul 2025',
//                 status: 'pending',
//                 logo: '',
//               }}
//             />
//           </View>
//         </TouchableOpacity>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   button: {
//     // backgroundColor: '#6200ee',
//     padding: 14,
//     borderRadius: 8,
//   },
//   buttonText: {
//     // color: '#fff',
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: 35,
//   },
//   backdrop: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     backgroundColor: 'rgba(0,0,0,0.3)',
//   },
//   sheetContainer: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     elevation: 5,
//   },
//   sheetTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginBottom: 10,
//   },
//   closeButton: {
//     marginTop: 10,
//     alignSelf: 'flex-end',
//   },
//   closeButtonText: {
//     color: '#6200ee',
//     fontWeight: 'bold',
//   },
// });

// export default BottomSheetWithModal;

import React, {ReactNode, useState} from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

const BottomSheetWithModalNew = ({
  title = 'Bottom Sheet',
  children,
}: {
  title: string;
  children: (props: {
    openModal?: () => void;
    closeModal?: () => void;
  }) => ReactNode;
}) => {
  const [visible, setVisible] = useState(false);

  const openModal = () => setVisible(true);
  const closeModal = () => setVisible(false);

  return (
    <View style={styles.container}>
      {/* Trigger Button */}
      <Pressable style={styles.button} onPress={openModal}>
        <Text style={styles.buttonText}>...</Text>
      </Pressable>

      {/* Modal */}
      <Modal
        visible={visible}
        animationType="slide"
        transparent
        onRequestClose={closeModal}>
        <View style={styles.backdropContainer}>
          {/* Dismiss modal on backdrop press */}
          <TouchableWithoutFeedback onPress={closeModal}>
            <View style={styles.backdrop} />
          </TouchableWithoutFeedback>

          {/* Modal Content */}
          <View style={styles.sheetContainer}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.sheetTitle}>{title}</Text>
              <TouchableOpacity onPress={closeModal}>
                <View style={{borderRadius: 100}}>
                  <Image
                    source={require('../../assets/images/cancel.png')}
                    height={40}
                    width={40}
                  />
                </View>
              </TouchableOpacity>
            </View>

            {/* Content */}
            <View style={styles.content}>
              {children?.({openModal, closeModal})}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    padding: 14,
    borderRadius: 8,
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 35,
  },
  backdropContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  sheetContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '70%',
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  closeButtonText: {
    color: '#6200ee',
    fontWeight: 'bold',
    fontSize: 16,
  },
  content: {
    marginTop: 15,
  },
});

export default BottomSheetWithModalNew;
