import { TodoIcon } from "./TodoIcon";

function DeleteIcon ({ onDelete }) {
    return (
        <TodoIcon
            type="delete"
            color="white"
            action={onDelete}
        />
    );
}

export { DeleteIcon };