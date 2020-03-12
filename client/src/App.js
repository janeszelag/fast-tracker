import React, { useState, useEffect} from 'react';
import './App.css';
import axios from "axios";


function App() {

  const [state, setState] = useState({
    APIresponse: []
  });

  useEffect(() => {
    axios.request({
      url: "http://localhost:5000/",
      method: "get"
    })
    .then(response => {
      console.log(response)
      setState(prev => ({
        ...prev,
        APIresponse: response.data.info
      }));
    })
    .catch(function(error) {
      console.log(error);
    }); 
  }, [])

  return (
    <div className="App">
    <p> {state.APIresponse}</p>
    </div>
  );
}

export default App;
