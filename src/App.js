import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState,useEffect } from "react"
import Addtask from "./components/Addtask";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

function App() {

  const [value, onChange] = useState(new Date());
  const [showAddTask, setShowAddTask] = useState(false);
  const [showAllTask, setShowAllTasks] = useState(true);
  let [tasks, setTasks] = useState(()=>{return localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")): [] })


  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(tasks))
  }, [tasks])
  const formatValue = "MMM Do YYYY"




  // add Task
  const addTask = (task)=>{
    console.log(task);
    let id = tasks.length + 1;
    let date = moment(value).format(formatValue);
    const newTask = {id, day:date, ...task};
    setTasks([...tasks, newTask]);
    localStorage.setItem("todos",JSON.stringify(tasks));
  }

  //Delete Task
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id));
    
  }


  const logValue = () =>{
    setShowAllTasks(true)
    console.log(moment(value).format("MMM Do YYYY"));

  }

  const change = () => {
    setShowAllTasks(false)
  }
  

  const changeDate = (e) => {
    onChange(e)
  }


  const setReminder = (id) =>{
      setTasks(tasks.map((task)=> task.id === id ? {...task, reminder:!task.reminder}:task))
      localStorage.setItem("todos",JSON.stringify(tasks));
  }


  return (
    <div className="container">
      <Header onPrint={()=>logValue()} onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask }/>
      <Calendar  className="container calander" onChange={changeDate} value={value} onClickDay={change} tileContent={({ date }) => {
          if (tasks != null) {
            if (
              tasks.find(
                ({ day }) => day === moment(date).format(formatValue)
              )
            ) {
              return (
              <div className="calanderToDoMarker2">
                <p className="calanderToDoMarker">
                  {tasks.filter(item => item.day === moment(date).format(formatValue)).length}
                </p></div>
              );
            }
          }
        }}
        
      />

     { showAddTask && <Addtask date={moment(value).format(formatValue)} onAdd={addTask} /> }

      {showAllTask && tasks.length > 0 ?(<Tasks tasks={tasks} onDelete={deleteTask} onReminde={setReminder} />

      ):!showAllTask ?(<Tasks tasks={tasks.filter(item => item.day === moment(value).format(formatValue))} onDelete={deleteTask} onReminde={setReminder} />):"no todos to show"} 
    </div>
  );
}

export default App;
