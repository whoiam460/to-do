import '../../../index.css'
import Search from './Search'
import NavigationCards from './NavigationCards'
import SideBarList from './SideBarList'
import { useToDo, useAddList, useRemoveList } from '../context/hooks'

const SideBar = () => {
  const { removeList } = useRemoveList()
  const { taskList } = useToDo()
  const { addList } = useAddList()
  console.log(taskList)

  return (
    <>
      {/* <div>
        style={{
          width: '20%',
          backgroundColor: 'rgb(69, 75, 76)',
          height: '100vh',
        }}>
        <div
          style={{
            // height: '15%',
            // width: '100%',
            // display: 'flex',
            // justifyContent: 'center',
          }}>
          <input
            placeholder="Search"
            className="search"
            style={{ height: '15px', marginTop: '20px', width: '90%' }}
          />
          <i class="bi bi-search search-ico"></i>
        </div>
        <div style={{ height: '20vh' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div
              style={{
                width: '80px',
                backgroundColor: 'red',
                height: '50px',
              }}></div>
            <div
              style={{
                width: '80px',
                backgroundColor: 'red',
                height: '50px',
              }}></div>
          </div>
        </div>

        <div
          style={{
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '65%',
          }}>
          <p style={{ color: '#C7BEA2' }}> My Lists</p>
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

          <button onClick={addList} style={{ width: '50%' }}>
            + AddList
          </button>
        </div>
      </div> */}

      <div
        style={{
          width: '25%',
          backgroundColor: 'rgb(69, 75, 76)',
          height: '100vh',
        }}>
        <div
          style={{
            width: '90%',
            // height: '100vh',
            marginLeft: 'auto',
            marginRight: 'auto',
            
          }}>
            <Search/>
            <NavigationCards/>
            <SideBarList/>
          </div>
      </div>
    </>
  )
}
export default SideBar
