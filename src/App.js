import './App.css';
import { TodoCounter  } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoAdd } from './TodoAdd';
import { TodoClick } from './TodoClick';

const defaultTodos = [
  {text: "Ir a la peluqueria", completed: false},
  {text: "Estudiar React Js", completed: false}
];

const completed = defaultTodos.filter(todo=> todo.completed).length;

function App() {
  return (
    <div className="App">
      <TodoCounter completed={completed} total={defaultTodos.length} />
      
      <TodoAdd />   
      <CreateTodoButton/>

      <TodoList>
        <TodoSearch />   
        {defaultTodos.map((todo,index)=> (
          <TodoItem 
            key={index} 
            text={todo.text} 
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <TodoClick />
    </div>
  );
} 

export { App };
