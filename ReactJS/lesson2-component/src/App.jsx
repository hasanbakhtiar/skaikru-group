import React, { Component } from 'react'
import List from './components/List'

class App extends React.Component{
    render(){
        return(
            <>
              <h1 className='deyirman'>Hello</h1>
              <List />
              <List />
              <List />
            </>
        )
    }
  }

export default App