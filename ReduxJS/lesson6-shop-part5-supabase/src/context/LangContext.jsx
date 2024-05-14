import { useState } from "react";
import { createContext } from "react";

export const LangContext = createContext();

export const LangProvider = ({children})=>{
    const [lang,setLang] = useState(localStorage.getItem('lang'));
    return <LangContext.Provider value={[lang,setLang]}>{children}</LangContext.Provider>
}