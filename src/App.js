/**
 * Created by 刘瑶 on 2019/1/14.
 */
import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Login from './pages/admin/admin'
import Admin from './pages/login/login'

export default class APP extends React.Component{
    render(){
        return(
           <BrowserRouter>
               <Switch>
                   <Route path="/login" component={Login}/>
                   <Route path='/' component={Admin}/>
               </Switch>
           </BrowserRouter>
        )
    }
}
