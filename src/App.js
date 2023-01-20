import { Header, WorkSpace } from "./components";
import './styles/main.scss'
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <div className="App">
        <Header />
        <WorkSpace /> 
      </div>
    </SnackbarProvider>
  );
}

export default App;