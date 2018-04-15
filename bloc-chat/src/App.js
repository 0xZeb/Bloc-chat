
import React, { Component } from 'react';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

var config = {
  apiKey: "AIzaSyCWmL8QvQ5ivJ6M2yJvMzDLFLrj-3ZMN9Q",
  authDomain: "bloc-chat-43ca2.firebaseapp.com",
  databaseURL: "https://bloc-chat-43ca2.firebaseio.com",
  projectId: "bloc-chat-43ca2",
  storageBucket: "bloc-chat-43ca2.appspot.com",
  messagingSenderId: "1013221302805"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <RoomList firebase={firebase} />
        </main>
      </div>
    );
  }
}

export default App;
