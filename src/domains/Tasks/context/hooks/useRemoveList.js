import { useToDo } from "."

const useRemoveList = () => {
const {setTaskList,taskList}=useToDo()


  const removeList = id => {
    setTaskList(taskList.filter(list => list.id !== id))
  }
  return {removeList}
}

export default useRemoveList
