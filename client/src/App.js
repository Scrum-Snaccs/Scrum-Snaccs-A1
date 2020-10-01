import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./Homepage";
import NavigationBar from "./NavigationBar";
import SearchBar from "./SearchBar";
// import Calendar from "./Calendar";

function App() {
  return (
    <Router>
      <div className="container">
    <NavigationBar/>
        <br />
        <Route path="/" exact component={Homepage} />
        <Route path="/article/role=searcher" exact component={SearchBar} />
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
