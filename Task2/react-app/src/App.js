import React, { useState } from "react"
import './App.css';
import logo from "./logo.PNG";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showUsers, setShowUsers] = useState(false);

  const loadUsers = () => {
    setLoading(true);
    setShowUsers(true);
    const url = "https://reqres.in/api/users?page=1";
    fetch(url).then((response) => response.json()).then((json)=> {
        setLoading(false);
        setUsers(json["data"])
        console.log(users);
      }).catch((error) => console.log(error));
  }
  
  return(
    <div className = "App">
      <div className="menu">
        <img src={logo} className="App-logo"/>
        <button onClick = { loadUsers } className="button"> Get Users </button>
      </div>
      <div className="profiles">
      {showUsers ? (
        loading ? (
          <div className="loader"></div>
        ) : (
          users.map((user) => (
            <div key={user.id} className="users">
              <img src={user.avatar}/>
              <div>
                <h2>{user.first_name} {user.last_name}</h2>
                <p>{user.email}</p>
              </div>
            </div>
          ))
        ) 
      ): (
          <div></div>
      )}
      </div>
  </div>
  );
}

export default App;
