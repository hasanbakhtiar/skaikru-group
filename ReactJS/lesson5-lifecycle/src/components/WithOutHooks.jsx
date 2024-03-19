import React, { Component } from 'react'

class List extends Component{
    constructor(){
        super();
    }
    componentWillUnmount(){
        alert('list deleted')
    }

    render(){
        return(
            <ul>
                <li>list example</li>
                <li>list example</li>
                <li>list example</li>
            </ul>
        )
    }
}


export class WithOutHooks extends Component {
    constructor(){
        super();
        console.log('constructor is running...');
        this.state={
            data:"hello",
            display:true
        }
    }
    componentDidMount(){
        console.log("componentDidMount is running...");
        document.querySelector('h1').style.color='red';
    }
    componentDidUpdate(){
        console.log("componentDidUpdate is running...");
        document.querySelector('h1').style.color='green';

    }
    
  render() {
    let info;
    if (this.state.display) {
        info = <List / >
    }
    return (
      <div>
        {info}
        <h1>{this.state.data}</h1>
        <button onClick={()=>{
            this.setState({data:"new value",display:false})
        }}>change</button>
        </div>
    )
  }
}

export default WithOutHooks