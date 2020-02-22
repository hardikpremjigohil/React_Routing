// https://codeburst.io/getting-started-with-react-router-5c978f70df91

import React, { Component } from 'react';

import './App.css';
import Image from './images';
import Forms from './form';
import NotFound from './not_found'
import Update from './Update'
import Card from './card'
import {BrowserRouter as Router , Route ,Switch} from 'react-router-dom'
import {Link} from 'react-router-dom'


class App extends Component {
  constructor(){
    super();
    this.state={
      openwindow :'',
    }
  }
  render() {
   let id =3;
    return (
      <div className="App">
        
         <h1>A Tag</h1><br/>
         <a href='/form' >Form</a><br />
         <a href='/images' >Images</a><br /><br/>
         <h1>Link Tag</h1>
          <Link to={{ 
            pathname :'/form',
            hash : '#Submit',
            search : '?quick-submit=true'
            }} > FORM LINK(USING ROUTES) </Link><br />
          <Link to="/images" > <button>IMAGES LINK(USING ROUTES)</button> </Link><br />
          <Link to ={{pathname :'/update/' + id}} >Update</Link><br />
          {/* this.props.history.push({pathname : '/form'})  //This is used in update page */}
         <h2>------------------------------------------------------------------------------------------</h2>
              <Switch>
                {/* <Router>     //if Router use then we can only route child of this page */}
                <Route path="/images"  exact component={Image} />
                  <Route path="/form" exact component={Forms} />
                  <Route path="/update/:id" exact component={Update} />
                  <Route path="/card" exact component={Card} />
                  {/* {this.state.auth ? <Route path="/login" exact component={login} /> :null}
                  <Redirect from="/" to="/images" /> video=195// This is used when any path not found like auth false then return null(As Above Line) but if use redirect it will go to  path of TO of redirect*/}
                  {/* <Route component={NotFound} />   */}
                {/* </Router> */}
              </Switch>

      </div>
    );
  }
}


export default App;
