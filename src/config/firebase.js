// if( process.env.NODE_ENV == 'production' ) {
//   require('dotenv').config();
//   console.log(process.env.FIREBASE_KEY);
// }

const FIREBASE_CONFIG = {
  apiKey: process.env.NODE_ENV == 'production' ? FIREBASE_KEY : process.env.FIREBASE_KEY,
  authDomain: "react-todolist-97835.firebaseapp.com",
  databaseURL: "https://react-todolist-97835.firebaseio.com",
  projectId: "react-todolist-97835",
  storageBucket: "",
  messagingSenderId: "476167722264",
  appId: "1:476167722264:web:fcbd2f3179dca300"
};

export default FIREBASE_CONFIG;