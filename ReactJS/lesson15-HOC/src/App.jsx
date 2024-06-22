import React from 'react'
import CounterOne from './components/CounterOne'
import CounterTwo from './components/CounterTwo'

const App = () => {
  return (
    <div>
      <CounterOne title="One"/>
      <CounterTwo  title="Two"/>
    </div>
  )
}

export default App