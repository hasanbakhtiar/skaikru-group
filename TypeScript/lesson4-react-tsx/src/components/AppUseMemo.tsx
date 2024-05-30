import axios from "axios";
import { useEffect, useMemo, useState } from "react"

const AppUseMemo = () => {
  const [data,setData] = useState<any[]>([]);
  const [email,setEmail] = useState<string>("");
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>setData(res.data));
  },[])


  const [count,setCount] = useState<number>(0);


  const userRow = ()=>{
    
    console.log('user start');
    
    return data.map((item:any)=><p onClick={()=>{setEmail(item.email)

    }}>{item.name}</p>)
      
  }


  const mejorUser = useMemo(()=>userRow(),[email]);
  

  
  return (
    <div>
      {email}
      {userRow()}
      <p>{count}</p>
      <button onClick={()=>{setCount(count+1)
        console.log('count is running...');}
        
      }>inc</button>
    </div>
  )
}

export default AppUseMemo