import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Users from './components/Users'
import axios from 'axios'

const App = () => {
  const [user,setUser] = useState([]); 
  useEffect(()=>{
    axios
    .get("https://api.github.com/search/users?q=hasan")
    .then(res=>setUser(res.data.items))
  },[])
  console.log(user);
  return (
    <div>
      <Header />
      <Search />
      <Users getuser={user} />
    </div>
  )
}

export default App