import React from 'react'
import {withRouter,Link,Redirect} from 'react-router-dom'

class ChildOfForm extends React.Component{
    render(){
        console.log("this.propschildofform",this.props)
    return (
        
        <div>
         
            <h1>CHILDOForm</h1><br />
            
            <Link to={{pathname : '/images'}}> childofform </Link><br />
        </div>
    )
    }
}

export default ChildOfForm;