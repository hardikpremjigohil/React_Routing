import React from 'react'
import {Redirect} from 'react-router-dom'

class Update extends React.Component{
    constructor(props){
        super(props);
        this.state={
            boolean :false,
        }
    }
    local=()=>{
        
        this.props.history.push({pathname : '/form'})
                  //this.props.history.push('/form')
        //this.props.history.replace({pathname : '/form'}) //same as Redirect
    }
    direct=()=>{
        this.setState({
            boolean :!this.state.boolean
        })
        console.log('direct',this.state.boolean);
    }
         
    
    render(){
        console.log(this.state.boolean);
        if(this.state.boolean){
           return <Redirect to='/form' /> 
        }
        return (
            <div>
                <h1>Update</h1><br />
                <p>id is :{this.props.match.params.id}</p>
                {console.log('update',this.props)}
                
                <button onClick={this.local} >Using Props.Push</button> <br />
                <button onClick={this.direct} >REDIRECT To Form</button><br />

            </div>
        )
    }
}

export default Update;