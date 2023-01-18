import { Header, InputTodo, WorkSpace, Todos } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <WorkSpace> 
        <InputTodo />
        <Todos />
      </WorkSpace>
    </div>
  );
}

export default App;