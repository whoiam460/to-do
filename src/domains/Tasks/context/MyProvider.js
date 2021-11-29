import { useReducer, useState } from "react"
import MyContext from "./MyContext"
import { reducer } from "./reducer"



const MyProvider =({children}) =>{
    const [taskList, setTaskList] = useState([])
    const [taskTitle, setTaskTitle] = useState('')
    const [taskListTitle, setTaskListTitle] = useState('My List')

  
return (
    <>
    <MyContext.Provider value = {{taskList, setTaskList, taskTitle, setTaskTitle, setTaskListTitle, taskListTitle }}>
        {children}
    </MyContext.Provider>
    </>
)
}
export default MyProvider