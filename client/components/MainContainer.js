import React, { Component } from 'react';
import Header from './Header'
import Manager from './Manager'

class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        "Notebook",
        "Jello",
        "Spinach",
        "Rice",
        "Birthday Cake",
        "Candles"
      ],
      todoItem: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({todoItem: e.target.value})
    
    console.log('handleChange - ', e.target.value)
  }

  handleSubmit () {
    console.log("*********************");
    console.log("*********************");
    console.log("     handleSubmit    ");
    console.log("*********************");
    console.log("*********************");
    const updatedTodo = [this.state.todoItem, 
                         this.state.todoItem,
                         this.state.todoItem,
                         this.state.todoItem,
                         this.state.todoItem,
                         this.state.todoItem,
                         this.state.todoItem,
                         this.state.todoItem,
                         this.state.todoItem,
                         this.state.todoItem];
    this.setState({todos: updatedTodo});
  }


  render(){
    return (
      <div>
        <Header />
        <Manager todos={this.state.todos} 
                 handleChange={this.handleChange} 
                 handleSubmit={this.handleSubmit}
        />  
      </div>
    );

  }
}


export default MainContainer;
