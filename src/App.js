import React from 'react';
import logo from "./logo.svg";
import './App.css';
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <View className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>We now have Auth!</h1>
          <Card>
            <Button className='Button' onClick={signOut}>Sign Out</Button>
          </Card>
        </header>
    </View>
  );
}

export default withAuthenticator(App);