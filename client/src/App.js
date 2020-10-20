import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, BrowserRouter as Router, Route ,Switch} from "react-router-dom";
import HomePage from "./HomePage";
import Submitter from "./Submitter";
import Moderator from "./Moderator"
import NavigationBar from "./NavigationBar";
// import Switch from "react-bootstrap/esm/Switch";


// import Calendar from "./Calendar";

function App() {
  return (
    <Router>
      <div className="container">
    <NavigationBar/>
        <br />
      
        <Route path="/" exact component={HomePage} />
        <Route path ="/submitter" exact component={Submitter}/>
        <Route path ="/moderator" exact component ={Moderator}/>
       
        
      </div>
     
    </Router>
  );
}

export default App;
