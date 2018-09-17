import React, { Component , Fragment} from 'react';
import Utils from './utils'

class App extends Component {

  state = {
    playerone : "Player One",
    playertwo : 'Player Two'


  }

  componentDidMount () {
    
  }

  handleStartGame = () => {
    var $button = document.querySelector('.button');
 
    var duration = 0.3,
    delay = 0.08;
// TweenMax.to($button, duration, {scaleY: 1.6, ease: Expo.easeOut});
// TweenMax.to($button, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
// TweenMax.to($button, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });


    this.setState({
      playerone : prompt("Enter Player one name:", this.state.playerone)
    }, () => {
      console.log(this.state.playerone)
    })

    this.setState({
      playertwo : prompt("Enter Player two name:", this.state.playertwo)
    }, () => {
      console.log(this.state.playertwo)
    })

  //   if (this.state.playerone === null || this.state.playerone === "") {
  //     txt = "User cancelled the prompt.";
  // } else {
  //     txt = "Hello " + this.state.playerone + "! How are you today?";

      
  // }
  }
  render() {
    return (
      <Fragment>
      <div className="App">

   <img src="/images/tic-tac-toe-O.png" alt="ttt-bg" width="25%"></img>
   <img src="/images/tic-tac-toe-O.png" alt="ttt-bg" width="25%"></img>

   <img src="/images/tic-tac-toe-O.png" alt="ttt-bg" width="25%"></img>

   <img src="/images/tic-tac-toe-O.png" alt="ttt-bg" width="25%"></img>

   <img src="/images/tic-tac-toe-O.png" alt="ttt-bg" width="25%"></img>

   <img src="/images/tic-tac-toe-X.png" alt="ttt-bg" width="25%"></img>

   <img src="/images/tic-tac-toe-O.png" alt="ttt-bg" width="25%"></img>

   <img src="/images/tic-tac-toe-O.png" alt="ttt-bg" width="25%"></img>
   <img src="/images/tic-tac-toe-O.png" alt="ttt-bg" width="25%"></img>


      </div>
      <div className="startGameBtn">
      <p onClick={this.handleStartGame}> Start Game </p>
      </div>
    
      </Fragment>
    );
  }
}

export default App;
