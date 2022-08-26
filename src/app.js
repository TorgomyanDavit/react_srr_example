import React from "react";
import { Switch,Route,Link } from "react-router"
import Home from "./pages/home.js"
import { Helmet } from "react-helmet"
import Register from "./pages/register.js";
import { NavLink } from "react-router-dom"


function App() {

    function head() {
        return <Helmet>
            <title>My page Title</title>
        </Helmet>
    }
    return (
        <div>
            {head()}
            <div>
                <NavLink to="register">Register</NavLink>
            </div>
            <Switch>
                <Route exact path="/" render={() => <Home/>}/>
                <Route path="/register" render={() => <Register/>}/>
            </Switch>
        </div>
    )
};

export default App;
