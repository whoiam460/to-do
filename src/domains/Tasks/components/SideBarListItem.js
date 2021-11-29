import { useToDo,  useRemoveList } from '../context/hooks'
const SideBarListItem = () =>{
    const { taskList, } = useToDo()
    const { removeList } = useRemoveList()


    return(
        <div style={{ height: '100%' }}>
            {taskList.map(item => (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {' '}
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
                  <i style={{ color: 'white' }} class="bi bi-list-ul"></i>{' '}
                </div>{' '}
                <p style={{ color: 'white' }}>{item.name}</p>
                <i
                  onClick={() => removeList(item.id)}
                  style={{ marginLeft: '100px' }}
                  class="bi bi-x"></i>
              </div>
            ))}
          </div>

    )
}

export default SideBarListItem