import React, {useState} from 'react'
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
import { UpdateUser } from './components'
import { ModalContainer, ModalRoute, ModalLink } from 'react-router-modal'
import { useSelector } from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import 'react-router-modal/css/react-router-modal.css'
import './App.css'
function App() {
  const currentIdx = useSelector(state=>state.currentIdx.currentIdxData);
  console.log(currentIdx);
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
        <Route exact path = "/:currentIdx" component = {DetailPost}/>        
      </Router>
    </div>
  );
}

export default App;
