import Button from "./Button"



const Header = ({onAdd, showAddTask, onPrint}) => {

    return (
        <header className= "header">
           <h3>MY FANCY CALENDAR</h3> 
           <Button  onClick={onAdd} color={showAddTask?"pink":"hotpink"} text={showAddTask?"Close":"Add"} />
           <Button onClick={onPrint} color={"lightpurple"} text={"Show all"}/>
        </header>
    )
}

export default Header
