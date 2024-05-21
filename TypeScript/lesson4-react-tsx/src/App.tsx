import React, { useContext, useEffect, useLayoutEffect, useState } from "react"
import List from "./components/List"
import { DataContext } from "./context/DataContext";

const App:React.FC = () => {
    const [count,setCount] = useState<number | string>(0);
    // const inputref =  useRef<HTMLInputElement>(null);
    const product = useContext(DataContext);
    const [data,setData] = useState<any>();
    useLayoutEffect(()=>{
      setCount('new value')
    },[])
  return (
    <form onSubmit={(e:React.FormEvent)=>{
      e.preventDefault();

      const changeing = Number(data);
      console.log( typeof changeing);
      
      
      if (typeof changeing === "number") {
      setCount(changeing);
        
    }else if(typeof changeing === "string"){
      setCount(count+1)
    }else{
      console.log("errr");
      
    }}}>
      <input type="text" onChange={(e)=>{setData(e.target.value)}} />
        {count}
        {product.map((item:any)=>(
          <li key={item.id}>{item.title}</li>
        ))}
        <button>i</button>
        <List title="list one"/>
        <List title="list two"/>
    </form>
  )
}

export default App