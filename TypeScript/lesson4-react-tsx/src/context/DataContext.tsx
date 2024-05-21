import { createContext } from "react";
import { product } from "../data/product";

export const DataContext = createContext<any | null>(null);

export const DataProvider:React.FC<any> = ({children})=>{

        return (
                <DataContext.Provider value={product}>{children}</DataContext.Provider>
        )
}