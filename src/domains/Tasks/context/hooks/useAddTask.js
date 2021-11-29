import { useToDo } from '.'
import { v4 as uuidv4 } from 'uuid'

const useAddTask = () => {
  const { taskList, setTaskList, setTaskTitle } = useToDo()
  const AddTask = (id, taskTitle) => {
    taskList.map(item => {
      try {
        if (item.id == id) {
          item.child.push({
            name: taskTitle,
            id: uuidv4(),
          })
        }
      } catch (err) {
        console.log(err)
      }
      setTaskTitle('')
    })

    setTaskList([...taskList])
  }
  return { AddTask }
}
export default useAddTask
