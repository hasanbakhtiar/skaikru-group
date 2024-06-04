import { useEffect, useState } from "react";
import AOS from 'aos';
import { useAppDispatch, useAppSelector } from "../tools/store";
import { add, remove } from "../tools/features/todoSlice";
import swal from "sweetalert";

const Home = () => {
  const [todoValue,setTodoValue] = useState<string | any>("");
  const todoData = useAppSelector((p: any) => p);
  const dispatch = useAppDispatch();

  useEffect(()=>{
    AOS.init();
  },[])
  
  const todoAdd = (e: React.FormEvent) => {
    e.preventDefault();
  if (!todoValue) {
    swal("Please fill input","","warning");
  }else{
    dispatch(add(todoValue));
    setTodoValue("");
  }
  };
  return (
    <div className="container">
      <h1 className="text-center text-danger my-5">Todo App</h1>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <div className="col-7">
          <form onSubmit={todoAdd} className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter todo"
              value={todoValue}
              onChange={e=>setTodoValue(e.target.value)}
            />
            <button className="btn btn-dark" type="submit">
              Add
            </button>
          </form>
          <ul className="list-group">
            {todoData.map((item: any) => (
              <li data-aos="fade-up" key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                {item.text} <button className="btn btn-danger" type="button" onClick={()=>{dispatch(remove(item.id))}}>X</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
{/*    */}

    </div>
  );
};

export default Home;
