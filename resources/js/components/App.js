import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter,Router, Route, HashRouter} from 'react-router-dom';
import Home from './Home';
import '../style/App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import ReactNotifications from 'react-notifications-component'
import Register from '../register/Register'
import Login from '../register/Login'
import Matome2 from '../pages/Matome2'


class App extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <ReactNotifications/>
                <Route exact path="/" component={Home}/>
                <Route path='/keepermenu/main' component={Matome2}/>
                <Route path='/keeper_register' component={Register}/>
                <Route path='/keeper_login' component={Login}/>
            </BrowserRouter>
          );
    }
}

ReactDOM.render(<App />, document.getElementById('app'))

