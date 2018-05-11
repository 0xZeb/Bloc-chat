import React, {Component} from 'react';

class MessageList extends Component{
  constructor(props){
    super(props)

    this.state = {
      messages: []
    }

    this.messageRef = this.props.firebase.database().ref('messages');

}

    componentDidMount() {
      this.messageRef.on('child_added', snapshot => {
          const message = snapshot.val();
          message.key = snapshot.key;
          this.setState({ messages: this.state.messages.concat(message) });
        });

      }

    //send msg to database
 sendMessage(e){
         e.preventDefault();

         let displayName = "Guest";
         if(this.props.user){
           displayName = this.props.user.displayName;
         }

        this.messageRef.push({
            content: this.refs.message.value,
            roomId: this.props.activeRoom,
            sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
            userId: displayName
        })



      this.refs.message.value = "";
    }

    showTime(ms){
      const convertedTime = new Date(ms);

      return convertedTime.toLocaleTimeString();

    }

    render(){

      const selectedRoom = this.props.activeRoom;
      const messageList = this.state.messages
        .filter(message => message.roomId === selectedRoom)
        .map(message => {
          return <li className='message' key={message.key}>
             <span className="content"> {message.content} </span>
             <span className="user"> {message.userId} </span>
             <span className="time"> { this.showTime(message.sentAt)} </span>
          </li>
      })


      return (
      <section className="message-log">
        <section className="form">
          <h3>Send a Message</h3>
            <form className="message-maker" onSubmit={ this.sendMessage.bind(this) }>
                <input type="text" ref="message" />

                <button type="submit" className="button" id="send-message" >Send</button>
            </form>
        </section>
        <section className="chat-messages">
          <h3>Chat Messages </h3>
          <ul className = "list-container">
            {messageList}
          </ul>
        </section>
        </section>
      )
    }
}

export default MessageList;
