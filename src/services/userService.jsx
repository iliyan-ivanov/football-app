import { auth } from "../config/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password).then((res) =>
    console.log("Successfully logged in")
  );
}

export function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password).then((res) =>
    console.log("Succsesfully regirstrated!")
  );
}

export function logout() {
  return auth.signOut().then((res) => console.log("Logged out"));
}
