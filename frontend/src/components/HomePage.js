import React, { Component } from 'react';
import Customer from './Customer';
import Librarian from './Librarian';
import { 
    BrowserRouter as Router, 
    Switch,
    Route,
    Link,
    Redirect,}
    from "react-router-dom";

export default class HomePage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                
                <Router>
                    <Switch>
                        <Route exact path="/" > 
                            <p>This is the home Page</p> 
                            <button>I'm a librarian</button>
                            <button>I'm a customer</button>
                        </Route>
                        <Route path="/customer" component={Customer} />
                        <Route path="/librarian" component={Librarian} />
                    </Switch>
                </Router>
                
            </div>
        )
    }
}
