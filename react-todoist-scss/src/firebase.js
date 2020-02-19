import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyA7snTzY0ip2qDuzBAg6tigU_woj3pgQoE",
  authDomain: "react-todoist-2bda6.firebaseapp.com",
  databaseURL: "https://react-todoist-2bda6.firebaseio.com",
  projectId: "react-todoist-2bda6",
  storageBucket: "react-todoist-2bda6.appspot.com",
  messagingSenderId: "22929937248",
  appId: "1:22929937248:web:e499e6a77699b1de020405",
  measurementId: "G-E2WS9WRHEW"
})

export { firebaseConfig as firebase };