import './TodoItem.css';

function TodoItem({ index, text, completed, todos, setTodos }){
    const completedStyle = completed ? "TodoItem-p--completed" : "TodoItem-p--not-completed";
    let checkIconStyle = completed ? "icon-check icon-check--completed fa-solid fa-circle-check" : "icon-check fa-regular fa-circle-check";

    return(
        <li className={`TodoItem`}>
            <i 
                className={checkIconStyle}
                onClick={
                    e=>{
                        const todosCopy = [...todos];
                        
                        if(todosCopy[index].completed){
                            todosCopy[index].completed = false;
                        }else{
                            todosCopy[index].completed = true;
                        }
        
                        setTodos(todosCopy);
                    }
                }
            ></i>
            <p className={`TodoItem-p ${completedStyle}`}>{ text }</p>
            <i 
                className="icon-delete fa-solid fa-trash-can"
                onClick={
                    e=>{
                        const todosCopy = [...todos];
                        todosCopy.splice(index, 1);
                        setTodos(todosCopy);
                    }
                }
            ></i>
        </li>
    );
};

export { TodoItem }