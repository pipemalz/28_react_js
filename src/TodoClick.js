import React from "react";
import './TodoClick.css';

function TodoClick () {
    const [clickCount, setClickCount] = React.useState(0);

    return (
        <>
            <p>Diste click {clickCount} veces</p>
            <button
                className="CreateTodoButton" 
                onClick={
                    e=>{
                        setClickCount(clickCount + 1);
                    }
                }> 
                Click me 
            </button>
        </>
    );
}

export { TodoClick }