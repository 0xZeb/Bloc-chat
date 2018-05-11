import React, {Component} from 'react';

class User extends Component{
  constructor(props){
    super(props)

    this.state={
      userName: "Guest"
    }
  }



  signIn(){
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup( provider );
    this.setState({userName: this.props.user.displayName})
  }

  signOut(){
    this.props.firebase.auth().signOut();
    this.setState({userName: "Guest"})
  }


  componentDidMount(){
    this.props.firebase.auth().onAuthStateChanged( user => {
      this.props.setUser(user);
    });
  }


  render(){
      return(
        <div>
          <h3>Current User </h3>
        <div>
            { this.props.user ? this.props.user.displayName : "Guest"    }
        </div>
          <div>
              <button type="submit" className="log-in" onClick={ ()=>this.signIn()} >
               Log in </button>

               <button type="submit" className="log-out" onClick={ ()=>this.signOut()} >
               Log out </button>
          </div>
        </div>
    )}
}

export default User;
