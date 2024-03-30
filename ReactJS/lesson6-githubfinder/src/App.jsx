import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Users from './components/Users'
import axios from 'axios'

const App = () => {
  const [user,setUser] = useState([]); 
  const [status,setStaus] = useState();
  const userData=(k)=>{
    axios
    .get(`https://api.github.com/search/users?q=${k}`)
    .then(res=>setUser(res.data.items))
  }

  const checkStatus = (s)=>{
      setStaus(s);
  }
  return (
    <div>
      <Header />
      <Search comingKeyword={userData} sendStatus={checkStatus} />
      {user.length === 0 ? <h1 className='text-center'>{status}</h1>:<Users getuser={user} />}
    </div>
  )
}

export default App