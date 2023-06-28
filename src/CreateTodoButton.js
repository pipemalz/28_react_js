import './CreateTodoButton.css';

function CreateTodoButton({todoToAdd, setTodoToAdd, todos, setTodos}){
    return(
        <button 
            className='CreateTodoButton' 
            onClick={
                e=>{
                    if(todoToAdd !== '' && todoToAdd){
                        const newTodo = {text: todoToAdd, completed: false}
                        setTodos([...todos, newTodo]);
                        setTodoToAdd('');
                    }
                }
            }
        >
         +
        </button>
    );
}

export { CreateTodoButton }