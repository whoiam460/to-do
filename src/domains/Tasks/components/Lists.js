import ListCard from "./ListCard"
import { useToDo } from "../context/hooks"


const List = () => {
  const{taskList} = useToDo()
  console.log(taskList);
  return (
    <>
      <div
        style={{
          width:'75%',
          backgroundColor: '#212c2f',
        }}>
        <div
          style={{
            width:'90%',
            marginLeft:'auto',
            marginRight:'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid #797A7E',
          }}>
          <h1 style={{ color: '#0684ff' }}>All</h1>
          <div style={{ color: '#0684ff', fontSize:'40px' }}>
            {taskList.length}
          </div>
         
        </div>
         <ListCard/>
      </div>
      
    </>
  )
}
export default List
