import React, { useState, createContext } from "react";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";


export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);


  const auth = getAuth();
  auth.onAuthStateChanged((usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth,email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
        setError("Login Success!");
        window.open("/dashboard")?.focus();
        
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    const auth = getAuth();
      createUserWithEmailAndPassword(auth,email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
        setError("Congratulations, User Successfully Created!");
        return;
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onLogout = () => {
    
      auth
      .signOut()
      .then(() => {
        setUser(null);
        setError(null);
      // window.open("/login")?.focus();
      });
  };

 const onSetLoading=(arg)=>{
   setIsLoading(arg);
 }
  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated:!!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
        onSetLoading,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
