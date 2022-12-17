import { Component } from "react";
import icon from "./icon.jpg"
import React, { useState } from "react";

export class Todo extends Component{
    
    state = {
        userInput:"",
        Todo: []
    }
    onChangeEvent(e){
        this.setState({userInput: e});
    }
    
Add(input) {
if (input === ''){
        alert("Please enter the task")
    } else {
    let listArray = this.state.Todo;
    listArray.push(input)
    this.setState({Todo: listArray,userInput: ""})
}

}
crossesWord(event){
    const li = event.target;
    li.classList.toggle("crossed");
}

    render(){
        return(
            <div>
            <div>
                <input className="Color" type="text"
                placeholder="What do you plan today?" 
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/> 
            </div>
            <div>
            <button onClick={() => this.Add(this.state.userInput)}>ADD</button>
            </div>
            <ul>
                {this.state.Todo.map((task, index) => (
                <li onClick={this.crossesWord} key={index}><img src={icon} width="30px"/> {task}
            </li>))}
            
            </ul>
            </div>
        )
    }
}
