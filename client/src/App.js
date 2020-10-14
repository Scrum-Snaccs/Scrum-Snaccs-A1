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
        {/* <Route path="/" exact component={Calendar} /> */}
        {/* <Route path="/article/role=:role" component={ArticleList} />
        <Route path="/article/id:id" component={Article} />
        <Route path="/user" exact component={CreateUser} />
        <Route path="/article/submit" component={SubmitArticle} />
        <Route path="/login" exact component={UserLogin} />
        <Route path="/register" exact component={Register} />  */}
        
      </div>
     
    </Router>
  );
}

export default App;
