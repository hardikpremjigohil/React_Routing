import React from 'react'
import {withRouter,Link} from 'react-router-dom'

class log extends React.Component{
    render(){
        console.log("this.propscard",this.props)
    return (
        
        <div>
         
            <h1>CHILDOFFORM CARD</h1><br />
            {/* <Link to={{pathname : '/images'}}> child </Link><br /> */}
        </div>
    )
    }
}

export default log;