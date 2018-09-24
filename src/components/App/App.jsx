/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import firebase from 'firebase';
import firebaseui from 'firebaseui';

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
    };
  }
  async componentDidMount() {
    const config = {
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: `${process.env.REACT_APP_PROJECT_ID}.firebaseapp.com`,
    };
    await firebase.initializeApp(config);
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: async () => {
          const idToken = await firebase.auth().currentUser.getIdToken();
          this.setState({ token: idToken });
          document.getElementById('firebaseui-auth-container').style.display = 'none';
          return true;
        },
        uiShown() {
          document.getElementById('loader').style.display = 'none';
        },
      },
      signInFlow: 'popup',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
    };

    ui.start('#firebaseui-auth-container', uiConfig);
  }
  render() {
    return (
      <div>
        <h1>Firebase Login Test</h1>
        <div id="firebaseui-auth-container" />
        <div id="loader">Loading...</div>
        <div>Token: {this.state.token}</div>
      </div>
    );
  }
}

App.propTypes = {};

App.defaultProps = {};

export default App;
