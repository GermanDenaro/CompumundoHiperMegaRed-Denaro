import React from 'react'
import ItemListContainer from '../ItemListContainer'
import Navbar from '../Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ItemDetailContainer from '../ItemDetailContainer'
import Cart from '../Cart'

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
                    <Route path="/cart">
                        <Cart/>
                    </Route>
                    <Route path="/">
                        <ItemListContainer/>
                    </Route>
                </Switch>
        </Router>
    )
}

export default RouterApp
