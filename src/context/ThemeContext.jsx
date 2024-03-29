import { createContext, useEffect, useState } from "react"



 export const getInitialTheme = () =>{
    if(typeof window !== undefined && window.localStorage){
        const storedPrefs   = window.localStorage.getItem("color-theme")
        console.log(storedPrefs,"check ist type:  ",  Boolean(typeof storedPrefs === "string"))
        if(["dark", "light"].includes(storedPrefs)){
            return storedPrefs
        }

        const userMedia = window.matchMedia("(prefers-color-scheme:dark)")

        if(userMedia.matches){
            return "dark"
        }
    }
     return "light"
}

export const ThemeContext =  createContext()


const ThemeProvider = ({initialTheme,children})=>{

    const [theme,setTheme] =  useState(initialTheme)

  const  rawSetTheme = (theme)=>{
    const root =  window.document.documentElement
    const isDark = theme === "dark"

    root.classList.remove(isDark?"light":"dark")
    root.classList.add(theme)
    localStorage.setItem("color-theme",theme)
  }
    
    if(initialTheme){
        rawSetTheme(initialTheme)
    }

    useEffect(()=>{
        getInitialTheme()
        rawSetTheme(getInitialTheme())
    },[])
    useEffect(()=>{
        rawSetTheme(theme)
    },[theme])

    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider