import { auth } from "../config/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email.value, password.value)
    .then((res) => {
      console.log("succsesfully logged in");
    })
    
}

export function register(email, password) {
    return createUserWithEmailAndPassword(auth, email.value, password.value)
            .then(res => {
                console.log('Succsesfully regirstrated!');
            })
}

export function logout() {
    auth.signOut();
}