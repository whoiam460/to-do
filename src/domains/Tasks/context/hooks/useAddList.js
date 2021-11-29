import { useToDo } from '../hooks/index'
import { v4 as uuidv4 } from 'uuid'

const useAddList = () => {
  const { taskList, setTaskList, taskListTitle } = useToDo()
  console.log(taskList)

  const addList = () => {
    let list = {
      name: taskListTitle,
      id: uuidv4(),
      child: [],
    }
    setTaskList([...taskList, list])
  }

  return { addList }
}
export default useAddList
