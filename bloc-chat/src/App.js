
import React, { Component } from 'react';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';

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
 constructor(props){
   super(props)

   this.state = {
     activeRoom: ""
   };

 }



  getActiveRoom(room){
      const selectedRoom = room;
      this.setState({ activeRoom: selectedRoom});
  }


  render() {
    return (
      <div className="App">
        <main>
          <RoomList
             firebase={firebase}
             getActiveRoom = { (room)=> this.getActiveRoom(room) }
             activeRoom = {this.state.activeRoom }
          />
          <MessageList
             firebase={firebase}
             activeRoom = {this.state.activeRoom}
          />
        </main>
      </div>
    );
  }
}

export default App;
