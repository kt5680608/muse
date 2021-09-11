import Success from './pages/auth/Success'
import Auth from './pages/auth/Auth'
import { Home,
          All,
          Muse }
        from './pages'
import { UpdateUser } from './components'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path = '/' component = { Home } />
        <Route path = '/auth' component={ Auth } />
        <Route path = '/success' component={ Success } />
        <Route path = '/muse' component={ Muse } />
        <Route path = '/all' component={All}/>
      </Router>
      <UpdateUser/>
    </div>
  );
}

export default App;
