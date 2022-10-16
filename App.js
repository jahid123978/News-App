// // import { StatusBar } from 'expo-status-bar';
// // import React from 'react';
// // import { StyleSheet, Text, TextInput, View } from 'react-native';

// // export default function App() {
// //   const [text, onChangeText] = React.useState("Useless Text");
// //   const [number, onChangeNumber] = React.useState(null);
// //   return (
// //     <View style={styles.container}>
// //       <Text>Jahid is world class Software Developer!</Text>
// //       <Text>For completing this journey how much skill you</Text>
// //       <StatusBar style="auto" />
// //       <View>
// //       <TextInput
// //         style={styles.input}
// //         onChangeText={onChangeText}
// //         value={text}
// //       />
// //       <TextInput
// //         style={{border: "1px solid black"}}
// //         onChangeText={onChangeNumber}
// //         value={number}
// //         placeholder="Enter email"
// //         keyboardType="numeric"
// //       />
// //       </View>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: 'white',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });

// import React, { useEffect, useState } from 'react';
// import { Pressable, StyleSheet, Text, View, SafeAreaView, TextInput, Button} from 'react-native';
// // import { SafeAreaView, TextInput } from "react-native";

// const App = () => {
//   const [timesPressed, setTimesPressed] = useState(0);

//   let textLog = '';
//   if (timesPressed > 1) {
//     textLog = timesPressed + 'x onPress';
//   } else if (timesPressed > 0) {
//     textLog = 'onPress';
//   }
//   const [text, onChangeText] = React.useState(0);
//   const [number, onChangeNumber] = React.useState(0);
//   const [sumInfo, setSumInfo] = useState(0);
//   // useEffect(()=>{
//   //  let sum = Number(text) + Number(number);
//   //  setSumInfo(sum);
//   // },[text, number])

  

//   function handleSum(){
//     let sum = Number(text) + Number(number);
//    setSumInfo(sum);
//   }
  

//   return (
//     <View style={styles.container}>
//        <SafeAreaView>
//         <Text>First Number</Text>
//       <TextInput
//         style={styles.input}
//         onChangeText={onChangeText}
//         value={text}
//         keyboardType="numeric"
//       />
//       <Text>Second Number</Text>
//       <TextInput
//         style={styles.input}
//         onChangeText={onChangeNumber}
//         value={number}
//         // placeholder="useless placeholder"
//         keyboardType="numeric"
//       />
//       <Button
//         title="Press me"
//         onPress={() => handleSum()}
//       />
//       <Text>First + Second = {sumInfo}</Text>
//     </SafeAreaView>
//       <Pressable
//         onPress={() => {
//           setTimesPressed((current) => current + 1);
//         }}
//         style={({ pressed }) => [
//           {
//             backgroundColor: pressed
//               ? 'rgb(210, 230, 255)'
//               : 'white'
//           },
//           styles.wrapperCustom
//         ]}>
//         {({ pressed }) => (
//           <Text style={styles.text}>
//             {pressed ? 'Pressed!' : 'Press Me'}
//           </Text>
//         )}
//       </Pressable>
//       <View style={styles.logBox}>
//         <Text testID="pressable_press_console">{textLog}</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   text: {
//     fontSize: 16
//   },
//   wrapperCustom: {
//     borderRadius: 8,
//     padding: 6
//   },
//   logBox: {
//     padding: 20,
//     margin: 10,
//     borderWidth: StyleSheet.hairlineWidth,
//     borderColor: '#f0f0f0',
//     backgroundColor: '#f9f9f9'
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   }
// });

// export default App;


import React from "react";
import 'react-native-gesture-handler'
import DrawerNavigator from "./navigation/DrawerNavigator";

 const App = () => {
  return (
      <DrawerNavigator />
  );
}
export default App;