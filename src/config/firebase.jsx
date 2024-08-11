import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyArCJfVTzGT20o-nTHZL4xQVBIeYwJVDSA",
  authDomain: "football-site-13535.firebaseapp.com",
  databaseURL: "https://football-site-13535-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "football-site-13535",
  storageBucket: "football-site-13535.appspot.com",
  messagingSenderId: "403898425612",
  appId: "1:403898425612:web:cf61e35e06d06f54c1e929"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
