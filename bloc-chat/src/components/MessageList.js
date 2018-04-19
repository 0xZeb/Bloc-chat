import React, {Component} from 'react';

class MessageList extends Component{
  constructor(props){
    super(props)

    this.state={
      messages: {}
    };

    this.roomsRef = this.props.firebase.database().ref('room');

}


    componentDidMount() {
      this.roomsRef.on('child_added', snapshot => {
        //set activeRoom to selected room in App setState

        //this.setState({activeRoom: selected.key  });
      });

    }

    sendMessage(e){
      e.preventDefault();
      console.log(this.refs.message.value);

      this.refs.message.value = "";

    }


    render(){
      return (
      <section className="message-log">
        <section className="form">
            <form className="message-maker"
            onSubmit={ this.sendMessage.bind(this) }>
                <input type="text" ref="message" />
                <button type="submit" className="button" id="send-message" >Send</button>
            </form>
        </section>
        <section className="messages">
            //map method goes here printing list of messages to screen
        </section>
        </section>
      )
    }
}

export default MessageList;
