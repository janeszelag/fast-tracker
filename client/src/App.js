import React, { useState, useEffect} from 'react';
import './App.css';
import axios from "axios";


function App() {

  const [users,setUsers] = useState([])

  useEffect(() => {
    axios.request({
      url: "http://localhost:5000/users",
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Credentials": true
      },
      withCredentials: false
    })
    .then(response => {
      console.log(response.data)
      setUsers(response.data)
    })
    .catch(function(error) {
      console.log(error);
    }); 
  }, [])

  const userList = users.map((user, index) => {
    return (
      <p key={index}>email: {user.email}</p>
    );
  });

  return (
    <div className="App">
    <div>{userList}</div>
    </div>
  );
}

export default App;
