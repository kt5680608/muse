import Success from './pages/auth/Success'
import Auth from './pages/auth/Auth'
import { Home,
          All,
          Muse,
          UserUpdate,
          MyPage,
          Replace
        }
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
        <Route path = "/userUpdate" component = { UserUpdate }/>
        <Route path = "/mypage" component = { MyPage }/>
        <Route path = "/replace" component={ Replace }/>
      </Router>
    </div>
  );
}

export default App;
