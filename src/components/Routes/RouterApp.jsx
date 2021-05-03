import React from 'react'
import ItemCount from '../ItemCount'
import ItemListContainer from '../ItemListContainer'
import Navbar from '../Navbar'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import ItemDetailContainer from '../ItemDetailContainer'

const RouterApp = () => {
    return (
        <Router>
            <Navbar/>
                <Switch>
                    <Route exact path="/">
                        <ItemListContainer/>
                    </Route>
                    <Route path="/item/:id">
                        <ItemDetailContainer/>
                    </Route>
                    <Route path="/category/:id">
                        <ItemListContainer/>
                    </Route>   
                    <Route path="/">
                        <ItemListContainer/>
                    </Route>
                </Switch>
            <Redirect to="/"/>        
            <ItemCount/>
        </Router>
    )
}

export default RouterApp
