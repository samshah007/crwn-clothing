import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import Header from './components/header/header.component';
import SignInAndRegister from './pages/sign-in-and-register/sign-in-and-register.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { connect } from 'react-redux';

class App extends React.Component {
  unsubscirbeFromAuth = null;
  componentDidMount(){
    const { setCurrentUser } = this.props;
    this.unsubscirbeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=> {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }else{
        setCurrentUser(userAuth);
      }
    })
  }
  componentWillUnmount(){
    this.unsubscirbeFromAuth();
  }
  render(){
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndRegister} />
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser:user => dispatch(setCurrentUser(user))
});
export default connect(null,mapDispatchToProps)(App);
