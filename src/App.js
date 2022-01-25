import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import Header from './components/header/header.component';
import SignInAndRegister from './pages/sign-in-and-register/sign-in-and-register.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser : null
    }
  }
  unsubscirbeFromAuth = null;
  componentDidMount(){
    this.unsubscirbeFromAuth = auth.onAuthStateChanged(user=> {
      this.setState({
        currentUser: user
      });
      console.log(user);
    })
  }
  componentWillUnmount(){
    this.unsubscirbeFromAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndRegister} />
        </Switch>
      </div>
    );
  }
}

export default App;
