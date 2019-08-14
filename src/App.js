import React from 'react'
import Chat from './components/chat/Chat'
import Auth from './components/authorization/authorization'
import store from './redux/store'
import {connect} from 'react-redux'
import { logIn } from './redux/actions'

import './style.sass'

const name = localStorage.getItem('userName');
if(name) store.dispatch(logIn(name)); 

const App = ({ auth }) => auth ? (<Chat className="chat"/>) : (<Auth/>);

const mapStateToProps = state => {
    const { authorization } = state;
    return { auth: authorization.auth };
  };
    
export default connect(mapStateToProps)(App);