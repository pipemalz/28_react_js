import './TodoIcon.css';
import { MdDelete } from "react-icons/md";
import { BsCheckCircleFill, BsCheckCircle } from "react-icons/bs";

const icons = {
    "check": color => 
        <BsCheckCircle className='Icon' fill={color}/>,
    "check--completed": color => 
        <BsCheckCircleFill className='Icon' fill={color}/>,
    "delete": color => 
        <MdDelete className='Icon' fill={color}/>
}

function TodoIcon ({ type, color, action }) {
    return (
        <span className={`Icon-container Icon-container-${type}`} onClick={action}>
            {icons[type](color)}
        </span>
    );
}

export { TodoIcon };