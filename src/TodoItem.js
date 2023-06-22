import './TodoItem.css';

function TodoItem({ text, completed }){
    return(
        <li className={`TodoItem`}>
            <span className={`Icon Icon-check`}>OK</span>
            <p className={`Todo-item-p Todo-item-p--not-completed`}>{ text }</p>
            <span className={`Icon Icon-delete`}>X</span>
        </li>
    );
};

export { TodoItem }