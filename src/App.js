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
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
  });

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
                    index={index} 
                    text={todo.text} 
                    completed={todo.completed}
                    todos={todos}
                    setTodos={setTodos}
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
      {/* <TodoClick />

      <ShowDate /> */}
    </div>
  );
} 

export { App };
