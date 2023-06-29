import { TodoIcon } from './TodoIcon';

function CheckIcon ({ completed, onComplete }) {
    return (
        <TodoIcon 
            type="check"
            color= { completed ? 'green': 'white'}
            action={ onComplete }
        />
    );
}

export { CheckIcon };