import { useToDo } from '.'

const useRemoveTask = () => {
  const { taskList, setTaskList } = useToDo()
  // console.log(taskList);
  const removeTask = id => {
    // setTaskList(taskList.child.filter(task => task.child.id !== id))
    // setTaskList(
    //   taskList.map(element => {
    //     console.log(element.child)
    //    // return element.child.filter(task => task.id !== id)
    //   })
    // )

    setTaskList(
      taskList.map(element => {
        console.log(element.child.id);
      return  element.child.filter(task => task.id !== id)
      })
    )
  }

  return { removeTask }
}

export default useRemoveTask
