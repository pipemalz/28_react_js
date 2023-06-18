import { TodoCounter  } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  {text: "Ir a la peluqueria", completed: false},
  {text: "Estudiar React Js", completed: false},
  {text: "Hacer el café", completed: true}
];

const completed = defaultTodos.filter(todo=> todo.completed).length;

function App() {
  return (
    <>
      <TodoCounter completed={completed} total={defaultTodos.length} />
      <TodoSearch />
      
      <TodoList>
        {defaultTodos.map((todo,index)=> (
          <TodoItem 
            key={index} 
            text={todo.text} 
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>
    </>
  );
} 

export { App };
