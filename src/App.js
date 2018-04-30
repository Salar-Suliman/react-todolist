import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreatePost from "./CreatePost";
import PostList from "./PostList";



class App extends Component {
  state ={
    inputValue :'',
    todos:JSON.parse(localStorage.getItem("todos")) || [],
    filterdTodos: JSON.parse(localStorage.getItem("filterdTodos")) || []
    

  }
  Change = e => {
    this.setState({
      [e.target.name]: e.target.value,
     
     
    })
    this.searchInputField(this.state.inputValue)
  }
  addTodo = inputValue =>{
    
    const todos = [...this.state.todos] 
    todos.push({ text: this.state.inputValue, created: Date.now(),status:false })
    this.state.inputValue.length > 1 ?
    this.setState({todos, filterdTodos:[]}) :null;
    
   
  }
  handleButtonClick = () => {
    const todos = [...this.state.todos]
    this.addTodo(this.state.inputValue)
  
    this.setState(
          {
            inputValue: " "
          }
        )
    localStorage.setItem("todos", JSON.stringify(todos))
      } 
    
  deleteToDo = index =>{
    const todos = [...this.state.todos]
    //const index = todos.findIndex(todo => todo.created === todoID)
    todos.splice(index,1)
    console.log(index)
    this.setState({todos})
    localStorage.setItem("todos", JSON.stringify(todos))
  };
  markToDo = index => {
     const todos =[...this.state.todos];
     todos[index].status = !todos[index].status
    console.log(index)
    this.setState({
     todos
    });
    localStorage.setItem("todos", JSON.stringify(todos))
  };
  searchInputField = todoText => {
     const todos =[...this.state.todos]
     const filterdTodos = todos.filter(i => i.text.includes(this.state.inputValue))
    this.setState({filterdTodos })
    localStorage.setItem("filterdTodos", JSON.stringify(filterdTodos))
  };
  render() {
    
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ToDo List Salarish</h1>
        </header> <br/>
        <CreatePost Change={this.Change} handleButtonClick={this.handleButtonClick} inputValue={this.state.inputValue}/>
        
        <PostList todoList={this.state.filterdTodos.length >0 ?  
        (this.state.filterdTodos)
        :this.state.todos } 
        deleteToDo={this.deleteToDo}
        markToDo={this.markToDo} />
         
      </div>
    
    );
  
 }
}
  export default App;