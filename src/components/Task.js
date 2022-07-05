import { reduce } from "async"
import {FaTimes} from "react-icons/fa"

const Task = ({task, onDelete, onReminde}) => {
    return (
        <div className={`task ${task.reminder ? "reminder":""}`} onDoubleClick={()=> onReminde(task.id)}>
            <h3>{task.text}
            <FaTimes
            style={{color:"red", cursor:"pointer"}} onClick={()=> onDelete(task.id)}/>
            </h3>
            <p>date: {task.day}</p>

        </div>
    )
}


export default Task