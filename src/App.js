import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';
import Register from './Register';
import Grid2 from './Grid';
import Footer from './Footer';
import AllProducts from './AllProducts';

const promise = loadStripe('pk_test_51IVbPBJBcgSx3UVrC4xoWQEqajd7TOPQYxCiOyHhNchDMVqK8AB35WHRXVvyOnGnuy8mtQ2fQVkOcOlwaeRZzLRn00nOsIFCx2');

function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    //runs once when app is loaded
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS', authUser);

      if (authUser) {
        // the user just logged in / user was logged in
        dispatch({
          //sends user to data layer
          type: 'SET_USER',
          //send the user
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">

        <Switch>
          <Route exact path="/allProducts">
            <Header />
            <AllProducts />
            <Footer />
          </Route>
          <Route exact path="/orders">
            <Header />
            <Orders />
            <Footer />
          </Route>
          <Route exact path="/grid">
            <Header />
            <Grid2 />
            <Footer />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>

        {/* header*/}
        {/*home */}
      </div>
    </Router>

  );
}

export default App;
