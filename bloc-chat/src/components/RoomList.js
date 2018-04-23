import React, {Component} from 'react';



class RoomList extends Component {
  constructor(props){
    super(props)

    this.state = {
      rooms: [],

    };

    this.roomsRef = this.props.firebase.database().ref('room');

  }

    componentDidMount() {
      this.roomsRef.on('child_added', snapshot => {
        const room = snapshot.val();
        room.key = snapshot.key;
        this.setState({rooms: this.state.rooms.concat(room)});
      });
    }

    createRoom(e){
        e.preventDefault();
        const newRoomName = this.refs.roomName.value;
        this.roomsRef.push({ name: newRoomName });
        this.refs.roomName.value = "";
    }

  render() {
    return (
      <section className='roomlist'>
      <h3>Active Room</h3>
      <span>{this.props.activeRoom}</span>
          <h1 className='title'>Bloc Chat</h1>
          <ul className='sidebar-list'>
          {
            this.state.rooms.map((room, index) =>
              <li className='rooms'
              onClick={ ()=>this.props.getActiveRoom(room.key) }
               key={index}> {room.name} </li>
          )}
          </ul>
          <section className="form">
            <form onSubmit={ this.createRoom.bind(this) } >
              <p>Create a room</p>
              <input type="text" ref="roomName" />
              <button type="submit"> Create Room</button>
            </form>
          </section>


      </section>
    );
  }
}

export default RoomList;
