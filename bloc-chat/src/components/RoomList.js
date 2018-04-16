import React, {Component} from 'react';


class RoomList extends Component {
  constructor(props){
    super(props)

    this.state = {
      rooms: []
    };

    this.roomsRef = this.props.firebase.database().ref('room');
    console.log(this.roomsRef);
  }

    componentDidMount() {
      this.roomsRef.on('child_added', snapshot => {
        const room = snapshot.val();
        room.key = snapshot.key;
        console.log(snapshot.val());
        this.setState({rooms: this.state.rooms.concat(room)});
      });
    }



  render() {
    return (
      <section className='roomlist'>
        <h1 className='title'>Bloc Chat</h1>
        <ul className='sidebar-list'>
        {
          this.state.rooms.map((room, index) =>
            <li className='rooms' key={index}>{room.name}</li>
        )}
        </ul>
      </section>
    );
  }
}

export default RoomList;