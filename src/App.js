import React, { Component } from 'react';
import { auth, database } from './firebase';
import SignIn from './sign-in';
import CurrentUser from './current-user';
import NewRestaurant from './new-restaurant';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  componentDidMount = () => {
    auth.onAuthStateChanged((currentUser) => {
      this.setState({ currentUser });
    })
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Lunch Dash</h1>
        </header>
        <div>
          {!currentUser && <SignIn />}
          {currentUser &&
            <div>
            <NewRestaurant/>
            <CurrentUser user={currentUser} />
            </div>
            }
        </div>


      </div>
    );
  }
}

export default App;
