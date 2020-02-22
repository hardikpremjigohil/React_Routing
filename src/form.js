import React,{Component} from 'react'

import {Link} from 'react-router-dom'
import ChildOfForm from './ChildOfForm'

class form extends Component {
    constructor(props){
        super(props);
    }
    ComponentDidMount(){
        //console.log(this.props);
    }
    render(){
    return (
        <div>
            <h1>FORM</h1><br />
            <h1>Card</h1><br />
            <Link to="/card" > child card </Link><br />
            <ChildOfForm name='vaibhav'/>
           
        </div>
    )
    }
}

export default form;