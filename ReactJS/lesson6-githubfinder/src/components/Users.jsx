import React from 'react'
import SingleUser from './SingleUser'

const Users = ({getuser}) => {
    console.log(getuser);
  return (
    <div className='container'>
            <div className="row g-5">
                {getuser.map(item=>(
                    <SingleUser
                    key={item.id}
                    alldata={item}
                    />

                ))}
            </div>
    </div>
  )
}

export default Users