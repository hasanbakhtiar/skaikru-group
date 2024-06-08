import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const RickContext = React.createContext<any | null>(null) 

export const RickPovider:React.FC<{children: React.ReactNode}> =({children})=>{
    const [character,setCharacter] = useState<any[]>([]);
    useEffect(()=>{
        axios.get("https://rickandmortyapi.com/api/character")
        .then(res=>setCharacter(res.data.results))
    },[])
    
        return <RickContext.Provider value={[character,setCharacter]}>{children}</RickContext.Provider>
}