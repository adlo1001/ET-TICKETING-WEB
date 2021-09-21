import {getAuth,signInWithEmailAndPassword } from "firebase/auth";

export const loginRequest = (email, password) =>{
  const auth = getAuth();
  signInWithEmailAndPassword(auth,email, password)
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });} ;
