import './CreateTodoButton.css';

function CreateTodoButton(){
    return(
        <button className='CreateTodoButton' onClick={evento =>{
           console.log(evento);
        }}>+</button>
    );
}

export { CreateTodoButton }