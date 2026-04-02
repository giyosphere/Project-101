import React, {createContext, useState, useContext} from "react";


const AuthContext = createContext(null);

export function AuthProvider({children}){
  
  const[user, setUser] = useState(null);

  const login = (username, password) => {
    if(username === 'Admin' && password === 'Admin123')
    {
      setUser({username: 'Admin', role: 'admin'});
      return true;
    }

    return false; 
  }

  const logout = () => {
    setUser(null);
  }

  return(
    <AuthContext.Provider value={{ user, login, logout}}>
      {children}

    </AuthContext.Provider>
  )
  
} 

export function useAuth(){
  return useContext(AuthContext);
}