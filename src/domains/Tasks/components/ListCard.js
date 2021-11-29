import { useToDo, useAddTask } from '../context/hooks'
import TaskCard from './TaskCard'
import { useRef } from 'react'

const ListCard = () => {
  const { taskList, taskTitle, setTaskTitle } = useToDo()

  const { AddTask } = useAddTask()

  const inputEl = useRef(null)

  const hendleKeyPres = (e, item) => {
    console.log(item)
    if (e.key === 'Enter') {
      AddTask(item.id, taskTitle)
    }
  }

  return (
    <>
      <div style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
        {taskList.map(item => {
          return (
            <div key={item.id}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2 style={{ color: '#0684ff' }}>{item.name}</h2>
                {/* <button onClick={() => removeList(item.id)}>+</button> */}
              </div>
              <TaskCard i={item} />
              <div>
                <div
                  style={{
                    display: 'flex',
                    borderBottom: '1px solid #797A7E',
                    paddingBottom: '10px',
                  }}
                  class="pretty p-default">
                  <input type="checkbox" />
                  <div style={{}}>
                    <input
                      ref={inputEl}
                      onKeyDown={e => hendleKeyPres(e, item)}
                      onChange={e => setTaskTitle(e.target.value)}
                      value={taskTitle}
                      style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: 'white',
                        marginLeft:'15px'
                      }}
                    />
                  </div>
                </div>

                {/* <button onClick={() => AddTask(item.id, taskTitle)}>+</button> */}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ListCard
