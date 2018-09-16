import React, { Component , Fragment} from 'react';

class App extends Component {

  state = {
    playerone : "Player One",
    playertwo : ''


  }

  componentDidMount () {
   
  
  }

  handleStartGame = () => {
    var txt;
 


    this.setState({
      playerone : prompt("Enter Player one name:", this.state.playerone)
    }, () => {
      console.log(this.state.playerone)
    })

    this.setState({
      playerone : prompt("Enter Player one name:", this.state.playerone)
    }, () => {
      console.log(this.state.playerone)
    })

    if (this.state.playerone === null || this.state.playerone === "") {
      txt = "User cancelled the prompt.";
  } else {
      txt = "Hello " + this.state.playerone + "! How are you today?";

      
  }
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
      <button onClick={this.handleStartGame}> Start Game </button>
      </div>
    
      </Fragment>
    );
  }
}

export default App;
