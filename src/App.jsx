import Router from "./Routers/Router";
import { BrowserRouter } from 'react-router-dom'
function App() {

  return (
    <div className="App" style={{height:'100%'}}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    
    </div>
  );
}

export default App;
