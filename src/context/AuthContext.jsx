import { createContext, useContext, useEffect, useState } from "react"
import {auth,db}  from "../firebase"
import {signInWithEmailAndPassword,signOut,createUserWithEmailAndPassword, onAuthStateChanged} from  'firebase/auth'
import { doc, setDoc } from "firebase/firestore"


export const UserContext =  createContext(null)


const  AuthContextProvider = ({children})=>{
    const [user,setUser] =  useState({})

    const signUp =  async (email,password)=>{
        await createUserWithEmailAndPassword(auth,email,password)

        return setDoc(doc(db, "users",email,{
            watchList:[]
        }))
    } ; 
    const signIn = async (email,password)=>{

        return  await  signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = async ()=>{
        return await signOut(auth)
    } 
    useEffect(()=>{

        const unsubScribe  = onAuthStateChanged(auth,(currentUser)=>{

            setUser(currentUser)
        })

        return ()=>{
            unsubScribe()
        }
    },[])


    return <UserContext.Provider value={{logOut,signIn,signUp,user}}>{children}</UserContext.Provider>
}
export default AuthContextProvider

export const UserAuth = ()=>{
    return useContext(UserContext)
}