import './TodoItem.css';
import { CheckIconCompleted } from './CheckIconCompleted';
import { CheckIcon } from './CheckIcon';
import { DeleteIcon } from './DeleteIcon';

function TodoItem({ text, completed, onComplete, onDelete }){
    const completedStyle = completed ? "TodoItem-p--completed" : "TodoItem-p--not-completed";
    const check = completed ? <CheckIconCompleted onComplete={onComplete}/> : <CheckIcon onComplete={onComplete}/>;

    return(
        <li className={`TodoItem`}>
            {check}
            <p className={`TodoItem-p ${completedStyle}`}>{ text }</p>
            <DeleteIcon 
                onDelete={onDelete}
            />
        </li>
    );
};

export { TodoItem }