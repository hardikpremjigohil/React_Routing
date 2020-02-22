import {BrowserRouter as Router , Route , Link ,NavLink, Switch , Redirect , withRouter } from 'react-router-dom'

------------------>1.BrowserRouter-------------------------------------------------------------------------------------------------
--->In index.js (Mostly)
<BrowserRouter >
    <App />
</ BrowserRouter >

----------------------->2.Route-----------------------------------------------------------------------------------------------------
--->In App.js(mostly)
<Router>
        <div>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </div>
</Router>

----------------->3.Link-------------------------------------------------------------------------------------------------------------
1.--->Link
<Link to={{ 
        pathname :'/form',
        hash : '#Submit',
        search : '?quick-submit=true'
}} > FORM LINK(USING ROUTES) </Link>

----------------->4.NavLink-------------------------------------------------------------------------------------------------------------
1.--->NavLink
<NavLink to="/about" className="normal" activeClassName="active" exact>about</NavLink>

----------------------->5.Switch-----------------------------------------------------------------------------------------------------
video link :https://www.youtube.com/watch?v=PHMzwisL_Ss
--->it will start checking the path of Route from top to bottom  if it gets path then it will not check below Route. 
    if i take url like localhost:/asdfasdfasdf then it will go on Dashboard page not on Notfound page (exact not used)
<Switch>
        <Route path="/"  component={Dashboard} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route Component={NotFound} />
</Switch>

------------------------->6.Redirect-------------------------------------------------------------------------------------------------

Two method
1.<Redirect to='/form' /> 
  <Redirect from="/" to="/images" />  
2.this.props.history.replace({pathname : '/form'})

----------------->7.withRouter--------------------------------------------------------------------------------------------------------
--->if we don't get props of Route in child of child component then we have to use this method
import React from 'react'
import {withRouter,Link} from 'react-router-dom'

class log extends React.Component{
    render(){
    return ( 
        <div>
            {console.log(this.props)}
            <h1>CHILDOFCHILD</h1><br />
            <Link to={{pathname : '/images'}}> IMAGES LINK(USING ROUTES) </Link><br />
        </div>
    )}
}
export default withRouter(log);

--------------------------------------------------------------------------------------------------------------------------------------
-------------this.props methods-------------------------------------------------------------------------------------------------------
1.--->this.props.history.push({pathname : '/form'})  //Same as Link
      this.props.history.push('/form')
    
2.--->this.props.history.replace({pathname : '/form'})  //Same as Redirect 

3.--->this.props.history.goBack()   //Go to Previous page 

----------------------------------Pass Id------------------------------------------------------------------------------------------------
1.Ex. Of ID--->
    Route:-<Route path="/update/:id" exact component={Update} />
    Call:- <Link to ={{pathname :'/update/' + id}} >Update</Link>  
           <Link to ={{pathname :{this.props.match.url} + id}} >Update</Link> 
    Take Id :-this.props.match.params.id


----------------------------------Query Strings with React Router-------------------------------------------------------------------------
1.Query String-->Ex in prac14_realtime_project(Pages/About)
    add:-import queryString from 'query-string'
    push:-this.props.history.push({search : `?search=${this.state.value}`})     
    Get params:-const values = queryString.parse(this.props.location.search)
                console.log('value--->',values.search) // "top"

2.Query params
