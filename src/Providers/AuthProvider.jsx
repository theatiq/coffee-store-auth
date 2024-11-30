// import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { Children, createContext, useState } from "react";
// import { auth } from "../firebase/firebase.init";
export const AuthContext = createContext(null);
const AuthProvider = ({ Children }) => {
//   const [user, setUser] = useState(null);


  const userInfo = {};
  return (
    <AuthContext.Provider value={userInfo}>{Children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;


//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const createUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const userInfo = { user, loading, createUser };