import MyProvider from "./domains/Tasks/context/MyProvider";
import useTodo from "./domains/Tasks/context/hooks/useToDo";
import MainComponent from "./domains/Tasks/components/mainComponet";

function App() {
 
  
  return (
    <div className="App">
      <MyProvider>
          <MainComponent/>
      </MyProvider>
      
    </div>
  );
}

export default App;
