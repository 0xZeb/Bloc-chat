
import React, { Component } from 'react';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';

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
     activeRoom: "",
     roomName: "",
     user: {}
   };

 }

  setUser(user){
    const authorizedUser = user;
    this.setState({ user: authorizedUser});
  }


  getActiveRoom(room, roomName){
      const selectedRoom = room;
      this.setState({ activeRoom: selectedRoom});
      this.setState({ roomName: roomName});
  }


  render() {

    return (
      <div className="App">
        <main>
          <RoomList
             firebase={firebase}
             getActiveRoom = { (room, roomName) => this.getActiveRoom(room, roomName) }
             activeRoom = {this.state.activeRoom }
             roomName = {this.state.roomName}
          />
          <MessageList
             firebase={firebase}
             activeRoom = {this.state.activeRoom}
             user = {this.state.user}
          />
          <User
             firebase={firebase}
             setUser={(user)=>this.setUser(user)}
             user= {this.state.user}

          />
        </main>
      </div>
    );
  }
}

export default App;
