function TodoAdd({children, todoToAdd, setTodoToAdd, todos, setTodos}){
    return (
        <div>
            <input 
                type="text" 
                placeholder="Cortar cebolla"
                value={todoToAdd}
                onChange={
                    e=>{
                        setTodoToAdd(e.target.value)
                    }
                }
                onKeyUp={
                    e=>{
                        if(e.key === "Enter" && e.target.value !== ''){
                            setTodoToAdd(e.target.value);
                            const newTodo = {text: todoToAdd, completed: false};
                            setTodos([...todos, newTodo]);
                            setTodoToAdd('');
                        }
                    }
                }
            />
            {children}
        </div>
    );
}

export { TodoAdd }