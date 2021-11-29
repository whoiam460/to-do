import { useToDo, useRemoveTask} from '../context/hooks'

const TaskCard = props => {
  const { i } = props
  const {removeTask}= useRemoveTask()
  const { taskList } = useToDo()
  console.log(taskList)
  return (
    <>
      <div>
        {i.child.map(element => {
            console.log(element.id)
          return (
            <p
              style={{
                color: 'white',
                borderBottom: '1px solid #797A7E',
                paddingBottom: '10px',
                display: 'flex',
                justifyContent: 'space-between',
              }}
              key={element.id}>
              {element.name}
              <i onClick ={()=> removeTask(element.id)} class="bi bi-x"></i>
            </p>
          )
        })}
      </div>
    </>
  )
}

export default TaskCard
