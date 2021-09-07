import React from 'react';
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Result from "./components/Result";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


function App() {
  return (
        <Router>
            <Header/>
            <SearchBar/>
            <Switch>
                <Route exact path={["/", "/search/:term"]} children={<Result/>} />
            </Switch>
        </Router>
  );
}

export default App;
