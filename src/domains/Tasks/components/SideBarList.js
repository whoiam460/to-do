import { useState } from 'react'
import { useToDo, useAddList, } from '../context/hooks'
import SideBarListItem from './SideBarListItem'

const SideBarList = () => {
 
  const [showInput, setShowInput] = useState(false)
  const {  taskListTitle, setTaskListTitle } = useToDo()
  const { addList } = useAddList()

  const addListEnter = (e, item) => {
    if (e.key === 'Enter') {
      addList()
      setShowInput(false)
      setTaskListTitle('My List')
    }
  }

  return (
    <div>
      <h4 style={{ color: '#666666' }}>My Lists</h4>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '560px',
        }}>
        <div>
          {/*  draw here  */}

          <SideBarListItem/>

          <div
            style={{
              visibility: `${showInput ? 'visible' : 'hidden'}`,
              display: 'flex',
            }}>
            <div
              style={{
                height: '25px',
                width: '25px',
                borderRadius: '50%',
                backgroundColor: '#1597E5',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: '10px',
              }}>
              <i style={{ color: 'white' }} class="bi bi-list-ul"></i>
              {'  '}
            </div>

            <input
              onKeyDown={e => addListEnter(e)}
              onChange={e => setTaskListTitle(e.target.value)}
              value={taskListTitle}
              style={{
                marginLeft: '10px',
                backgroundColor: 'black',
                color: 'white',
              }}
            />
          </div>
        </div>
        <div onClick={() => setShowInput(true)} style={{ display: 'flex' }}>
          <i style={{ color: '#666666' }} class="bi bi-plus-circle" />
          <button
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: '#666666',
              fontSize: '16px',
            }}>
            Add List
          </button>
        </div>
      </div>
    </div>
  )
}

export default SideBarList
