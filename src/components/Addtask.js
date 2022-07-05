import { useState } from "react"


const Addtask = ({onAdd, date}) => {
    const [text, setText] = useState("");
    //const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);
    
    const onSubmit=(e) =>{
        e.preventDefault()
        if(!text){
            alert("Pleas add a todo");
            return
        }

        onAdd({ text, reminder });
        setText("");
       // setDay("");
        setReminder(false);
        
    }

    return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className ="form-control">
            <label>Add todo</label>
            <input type="text" placeholder="Add todo" value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className ="form-controle">
            <p>{`Selected Date: ${date}`}</p>
        </div>
        <div className ="form-control form-control-check">
            <label>Set Reminder</label>
            <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>
        <input className="btn btn-block" type="submit" value="Save Task"/>

    </form>
    )
}

export default Addtask
