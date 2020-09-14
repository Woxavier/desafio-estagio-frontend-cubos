import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom' 
import HomePage from './Pages/Home'
import Movies from './Pages/Movies'


export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/movies/:id' exact component={Movies}/>
      </Switch>
    </BrowserRouter>
  )
}