import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_KEY,
  authDomain:  import.meta.env.VITE_APP_FIREBASE_DOMAIN,
  projectId:  import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket:  import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER,
  appId:  import.meta.env.VITE_APP_FIREBASE_ID
};
console.log(firebaseConfig)
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app)
export const db =  getFirestore(app)

export default app