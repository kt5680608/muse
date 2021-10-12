import React from 'react'
import Success from './pages/auth/Success'
import Auth from './pages/auth/Auth'
import { Home,
          All,
          Muse,
          UserUpdate,
          MyPage,
          Replace,
          DetailPost
        }
        from './pages'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import 'react-router-modal/css/react-router-modal.css'
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
        <Route exact path = "/display-details/:currentIdx" component = {DetailPost}/>        
      </Router>
    </div>
  );
}

export default App;
