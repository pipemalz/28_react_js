import { TodoIcon } from "./TodoIcon";

function CheckIconCompleted ( {onComplete} ) {
    return (
        <TodoIcon
            type="check--completed"
            color="green"
            action={onComplete}
        />
    );
}

export { CheckIconCompleted };