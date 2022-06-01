import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({children})=>{
    const[isAuthorized,setIsAuthorized]=useState(false)

    const login = (userName,password)=>{
        if(userName && password){
            setIsAuthorized(true)
        }
    }

    const logout =()=>{
        setIsAuthorized(false)
    }

    return(
        <AuthContext.Provider value={{isAuthorized,login,logout}}>
        {children}
        </AuthContext.Provider>
    )
}