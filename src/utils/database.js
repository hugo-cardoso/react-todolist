import firebase from 'firebase';
import FIREBASE_CONFIG from '@/config/firebase';

firebase.initializeApp(FIREBASE_CONFIG);
let DATABASE = firebase.firestore();
export default DATABASE;