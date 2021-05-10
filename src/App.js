import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">       
        <BrowserRouter>    
            <Navbar/>      
            <Switch>
              <Route path="/" exact component={Home}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
