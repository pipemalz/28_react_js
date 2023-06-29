import React from 'react';
import './App.css';
import { TodoCounter  } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoAdd } from './TodoAdd';
import { TodoClick } from './TodoClick';
import { ShowDate } from './ShowDate';
import { defaultTodos } from './defaultTodos';

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState([]);
  const [todoToAdd, setTodoToAdd] = React.useState("");

  const completedTodos = todos.filter(todo=> !!todo.completed).length;
  const totalTodos = todos.length;
  const searchQuery = todos.filter(todo=>{
      const todoText = todo.text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      const searchText = searchValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      return todoText.includes(searchText);
  });

  const completeTodo = index =>{
    const todosCopy = [...todos];                
    if(todosCopy[index].completed){
        todosCopy[index].completed = false;
    }else{
        todosCopy[index].completed = true;
    }
    setTodos(todosCopy);
  }

  const deleteTodo = index => {
    const todosCopy = [...todos];
    todosCopy.splice(index, 1);
    setTodos(todosCopy);
  } 

  return (
    <div className="App">    
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos} 
      />
      
      <TodoAdd 
        todoToAdd={todoToAdd}
        setTodoToAdd={setTodoToAdd}
        todos={todos}
        setTodos={setTodos}
      > 
        <CreateTodoButton
          todoToAdd={todoToAdd}
          setTodoToAdd={setTodoToAdd}
          todos={todos}
          setTodos={setTodos}
        />
      </TodoAdd>

      <div>
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <TodoList>
          {
            searchQuery.length > 0 
              ?
                searchQuery.map((todo,index)=> (
                  <TodoItem 
                    key={index}
                    text={todo.text} 
                    completed={todo.completed}
                    onComplete={()=>{completeTodo(index)}}
                    onDelete={()=>{deleteTodo(index)}}
                  />
                ))
              :
                searchValue !== ''
                  ?
                    <i style={{opacity: "0.8", fontSize: 14}}>No se han encontrado resultados</i>
                  :
                    <i style={{opacity: "0.8", fontSize: 14}}>No tienes ToDo's pendientes</i>
          }
        </TodoList>
      </div>
      
      {/* <ShowDate /> */}
    </div>
  );
} 

export { App };