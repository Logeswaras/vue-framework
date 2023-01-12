import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDMc7t7k3fTRRm7fT_PIYMMbTC9dXq1ttY",
  authDomain: "vue3-ts-app-auth.firebaseapp.com",
  projectId: "vue3-ts-app-auth",
  storageBucket: "vue3-ts-app-auth.appspot.com",
  messagingSenderId: "117270362250",
  appId: "1:117270362250:web:a86859542b00457b49d573"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth}