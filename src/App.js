import React, { Component } from 'react';
import { auth, database } from './firebase';
import SignIn from './sign-in';
import CurrentUser from './current-user';
import NewRestaurant from './new-restaurant';
import Restaurants from './restaurants';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      restaurants: null
    };

    this.restaurantRef = database.ref('/restaurants');
  }

  componentDidMount = () => {
    // when user has logged in/ or out or page refresh
    auth.onAuthStateChanged((currentUser) => {
      this.setState({ currentUser });
      // every time new value added to ref...
      this.restaurantRef.on('value', (snapshot) => {
        // update state with new ref
        this.setState({ restaurants: snapshot.val ( )});
      });
    });
  }

  render() {
    const { currentUser, restaurants } = this.state;
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
            <Restaurants restaurants={restaurants} user={currentUser}/>
            <CurrentUser user={currentUser} />
            </div>
            }
        </div>
      </div>
    );
  }
}

export default App;
