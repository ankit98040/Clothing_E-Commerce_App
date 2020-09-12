import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './component/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(async user => {
      //this.setState({ currentUser: user });
      createUserProfileDocument(user);

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
}
}

export default App;
