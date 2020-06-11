import React, { Component } from 'react';

import moon from './img/moon.svg';
import sun from './img/sun.svg';

import './style.css';

class App extends Component{
    state = {
        moment: "night",
        img: moon,
        text: "zZzZzZz..."
    };
    
    change = (event)=>{
        
        const date = event.target.checked
        console.log(event.target.checked)
        if ( date === true){
            this.setState({moment: "day", img: sun, text: ""})
        }else
            this.setState({moment: "night", img: moon, text: "zZzZzZz..."})
    };
    render(){ 
        return( 
    <main className={this.state.moment}>
        <label className="toggle" htmlFor="dabox">
            <input type="checkbox" id="dabox" onClick={this.change}/>
            <span className="slider" />
        </label>
        <img src={this.state.img} alt="Sun" />
        

        <h2>{this.state.text}</h2>
    </main>
        );
    }
}
export default App;
