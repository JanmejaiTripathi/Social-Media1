import React, { useContext } from 'react'
import {Link, useHistory} from 'react-router-dom'
import {UserContext} from '../App'

const Navbar = () =>{
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  const renderList = () =>{
    console.log(state)
    if (state){
      return[
        <li key="2"><Link to="/profile">Profile</Link></li>,
        <li key="3"><Link to="/create-post">Create Post</Link></li>,
        <li key="4"><Link to="/myfollowingpost">My following Posts</Link></li>,
        <li  key="5">
         <button className="btn #009688 teal"
        onClick={()=>{
          localStorage.clear()
          dispatch({type:"CLEAR"})
          history.push('/login')
        }}
        >
            Logout
        </button>
        </li> 
       ]
    }else{
      return [<li key ="1"><Link to="/login">Login</Link></li>,
    <li key ="2 "><Link to="/signup">Signup</Link></li>] 
    }
  }
  
    return(
        <nav>
    <div className="nav-wrapper white">
      <Link to= {state?"/":"/login"} className="brand-logo left">Social Media</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
       {renderList()}
      </ul>
    </div>
  </nav>

    )
}

export default Navbar;