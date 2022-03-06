import firebase from 'firebase/app';


import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyC23-H6MlJzOCO0goWULiqSV4B8IYyuqbc",
  authDomain: "sensaciones-app.firebaseapp.com",
  projectId: "sensaciones-app",
  storageBucket: "sensaciones-app.appspot.com",
  messagingSenderId: "606119825036",
  appId: "1:606119825036:web:c7b4082aea9599d279b5a9",
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;
export const getFirestore = () => firebase.firestore(app);

