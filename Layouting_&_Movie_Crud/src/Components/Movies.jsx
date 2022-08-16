import React, { useState , useEffect } from "react";
import Dashboard from './Dashboard'
import './Movies.css'; 
import Form from './Form'
import Header from './Header'
import TodosList from './TodosList'


const Movies = () => {


  // const[user,setUser]=useState()
  var email=JSON.parse (localStorage.getItem('currentUser')).email
  var initialState = JSON.parse(localStorage.getItem("todos")) || [];
 const getting_info=()=>{
     initialState.filter(elem=>{
      return elem.email===email
     })
 }
  // console.log(email);
  // initialState = initialState.filter(x=>{return x.email == email})
  
  const[input, setInput] = useState("");
  const[todos, setTodos] = useState(initialState);
  const[editTodo, setEditTodo] = useState(null);

  useEffect(()=>{
    let user=getting_info()
    // console.log(user);
    initialState.filter(elem=>{})
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  
  // const [user,setUser]=useState(gett_act_userr())
  return (
    <>
    <Dashboard>
    
      </Dashboard>

      <div className="containerr">
      <div className="app-wrapper"> 
        <div>
          <Header/>
        </div>
          <div>
            <Form 
            input = {input}
            setInput = {setInput}
            todos = {todos}
            setTodos = {setTodos}
            editTodo = {editTodo}
            setEditTodo = {setEditTodo}
            />
          </div>
          <div>
            <TodosList todos = {todos} setTodos = {setTodos} setEditTodo = {setEditTodo}/>
          </div>
      </div>

    </div>
 </>
  )
}

export default Movies