import React, { Component } from 'react';
import Customer from './Customer';
import Librarian from './Librarian';


export default class HomePage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <button>I'm a librarian</button>
                <button>I'm a customer</button>
            </div>
        )
    }
}
