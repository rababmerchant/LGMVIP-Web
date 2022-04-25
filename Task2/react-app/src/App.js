import React, { useState } from "react"
import './App.css';
import logo from "./logo.PNG";
import BatteryLoader from 'react-loaders-kit/lib/battery/BatteryLoader';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showUsers, setShowUsers] = useState(false);

  const loaderProps = {
    loading,
    size: 50,
    duration: 1,
    colors: '#5e22f0',
  }

  const loadUsers = () => {
    setLoading(true);
    setShowUsers(true);
    const url = "https://reqres.in/api/users?page=1";
    setTimeout(function() {
      fetch(url).then((response) => response.json()).then((json)=> {
        setLoading(false);
        setUsers(json["data"])
        console.log(users);
      }).catch((error) => console.log(error));
    }, 1000)
    
  }
  
  return(
    <div className = "App">
      <div className="menu">
        <img src={logo} className="App-logo" alt="logo"/>
        <button onClick = { loadUsers } className="button"> Get Users </button>
      </div>
      <h2>Users Profiles</h2>    
      {loading ? (
        <div className="loader">
          <BatteryLoader color="#270059" {...loaderProps} />
        </div>
      ) : (
        <div></div>
      )}
      <div className="profiles">
      {showUsers ? (
          users.map((user) => (
            <div key={user.id} className="users">
              <img src={user.avatar} alt="avatar"/>
              <div>
                <h3>{user.first_name} {user.last_name}</h3>
                <p>{user.email}</p>
              </div>
            </div>
          ))
        ) : (
          <div></div>
      )}
      </div>
  </div>
  );
}

export default App;
