import React, { Fragment } from 'react';
import  ReactDOM  from 'react-dom';
import roket from './img/spacex.jpg'


class App extends React.Component{
        render(){
            return <>
            <h1>Hello React</h1>
            <img src={roket} alt="" />
            </>

        }
}

ReactDOM.render(<App/>,document.querySelector('#root'));