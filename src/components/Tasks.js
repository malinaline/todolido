import Task from "./Task";

const Tasks = ({tasks, onDelete, onReminde,date, seeAll}) => {
 return (
      <>
       {tasks.map((task)=>(
          <Task key={task.id} task={task}
            onDelete={onDelete}
            onReminde={onReminde}
          />))}  
      </>
    )

}

export default Tasks
 