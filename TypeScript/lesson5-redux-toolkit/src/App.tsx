import { useDispatch, useSelector } from "react-redux"
import { add } from "./features/todoSlice";

const App = () => {
    const data:any = useSelector((p:any)=>p.todos);
    const dispatch   = useDispatch();
  return (
    <div>
        <ul>
        {data.map((item:any)=>(
            <li key={item.id}>{item.text}</li>
        ))}
        </ul>
            <button onClick={()=>{
                dispatch(add("new data"));
            }}>add</button>
    </div>
  )
}

export default App