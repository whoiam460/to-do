import List from './Lists'
import SideBar from './SideBar'

const MainComponent = () => {
  return (
    <>
      <div style={{ display: 'flex',width:'100%',height:'100vh' }}>
        <SideBar />
        <List />
      </div>
    </>
  )
}

export default MainComponent
