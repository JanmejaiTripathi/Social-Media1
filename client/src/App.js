import React,{useContext,createContext,useEffect,useReducer} from 'react'
import Navbar from './compnents/Navbar';
import './App.css'
import { BrowserRouter, Route, Switch,useHistory} from 'react-router-dom'
import Home from './compnents/screens/Home';
import Login from './compnents/screens/Login';
import Signup from './compnents/screens/Signup';
import Profile from './compnents/screens/Profile';
import FollowingPosts from './compnents/screens/SuscribedUserPosts'
import Reset from './compnents/screens/Reset'
import NewPassword from './compnents/screens/NewPassword'
import CreatePost from './compnents/screens/CreatePost'
import UserProfile from './compnents/screens/UserProfile'
import {reducer,initialState} from './reducers/userReducer'

export const UserContext = createContext()

const Routing = ()=>{
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("USER"))
    if(user){
      dispatch({type:"USER",payload:user})
    }else{
      if(!history.location.pathname.startsWith('/reset'))
           history.push('/login')
    }
  },[])
  return(
    <Switch>
      <Route exact path="/" >
      <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route path="/create-post">
        <CreatePost/>
      </Route>
      <Route path="/profile/:userid">
        <UserProfile />
      </Route>
      <Route path="/myfollowingpost">
        <FollowingPosts/>
      </Route>
      <Route exact path="/reset">
        <Reset/>
      </Route>
      <Route path="/reset/:token">
        <NewPassword />
      </Route>
      
    </Switch>
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <Navbar />
      <Routing />
      
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
