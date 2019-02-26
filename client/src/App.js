import React, { Component, Fragment } from 'react';
// import Utils from './utils'
import {isEqual} from 'lodash'


var winningPatterns = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
var plarerOnePattern = []
var plarerTwoPattern = []


var counter = 0
class App extends Component {

  state = {
    playerone: "Player One",
    playertwo: 'Player Two',
    gameActive: false,
    playerMessage: '',
    mainButton : '',
   
    

  }

  componentWillMount() {
    this.setState({
     mainButton: <p onClick={this.handleStartGame}> Start Game </p>
    })
  }

  handleStartGame = () => {

    this.setState({
      playerone: prompt("Enter Player one name:", this.state.playerone),
      playertwo: prompt("Enter Player two name:", this.state.playertwo)
    }, () => {

      this.setState({
        gameActive: true,
        playerMessage: `${this.state.playerone}'s turn`,
        mainButton : ''
      })
    })
  }

  handleImgClick(index) {
    



   
    if (this.state.gameActive) {
      winningPatterns.forEach( (winningPattern) => {
       
        if(isEqual(winningPattern , plarerOnePattern) || isEqual(winningPattern, plarerTwoPattern) ) {

          //someone has won
         this.setState({
           gameActive : false,
           mainButton: <p onClick={this.handlePlayAgain}> Play Again</p>
         })
         //checking if player one has won
         if(isEqual(winningPattern , plarerOnePattern)) {
          this.setState({
    
            playerMessage: `${this.state.playerone} has won :)`
          })
         }

         else {
          this.setState({
    
            playerMessage: `${this.state.playertwo} has won :)`
          })
         }

        }
  
        else {
          var imageContainer = document.getElementsByClassName('ImgContainer')

          if (imageContainer[index].children.length < 1) {
            var img = document.createElement("img");
            img.width = 100
            if (counter % 2 === 0) {
              img.src = "/images/tic-tac-toe-O.png"
              this.setState({
                playerMessage: `${this.state.playertwo}'s turn`
              })
             
              
              plarerOnePattern.push(index)
              plarerOnePattern.sort()
              // console.log("pl 1",plarerOnePattern)
            }
    
            else {
              img.src = "/images/tic-tac-toe-X.png"
              this.setState({
    
                playerMessage: `${this.state.playerone}'s turn`
              })
         
              plarerTwoPattern.push(index)
              plarerTwoPattern.sort()
              // console.log("pl 2",plarerTwoPattern)
            }
    
    
            imageContainer[index].appendChild(img)
            counter++
    
    
          }
    
    
        }
      })
    
      if(plarerOnePattern.length > 4 && plarerTwoPattern.length > 4 ) {
        this.setState({
          gameActive: false,
          mainButton: <p onClick={this.handlePlayAgain}> Play Again</p>,
          playerMessage: `Game Draw !`

        })
      }
    }

    else {
      return null;
    }

  }

  handlePlayAgain =  () => {
    // var imageContainer = document.getElementsByClassName('ImgContainer')
   document.getElementsByClassName('ImgContainer')[0].removeChild()
  }



  render() {
    return (
      <Fragment>
        <h2 style={{textAlign: "center"}}>{this.state.playerMessage}</h2>
        <div className="App">

          <p className="ImgContainer" style={{ width: "30%", height: "60px" }} onClick={() => { this.handleImgClick(0) }}></p>


          <p className="ImgContainer" style={{ width: "30%", height: "60px" }} onClick={() => { this.handleImgClick(1) }} >


          </p>

          <p className="ImgContainer" style={{ width: "30%", height: "60px" }} onClick={() => { this.handleImgClick(2) }} >


          </p>

          <p className="ImgContainer" style={{ width: "30%", height: "60px" }} onClick={() => { this.handleImgClick(3) }} >


          </p>

          <p className="ImgContainer" style={{ width: "30%", height: "60px" }} onClick={() => { this.handleImgClick(4) }} >


          </p>

          <p className="ImgContainer" style={{ width: "30%", height: "60px" }} onClick={() => { this.handleImgClick(5) }} >


          </p>

          <p className="ImgContainer" style={{ width: "30%", height: "60px" }} onClick={() => { this.handleImgClick(6) }} >


          </p>

          <p className="ImgContainer" style={{ width: "30%", height: "60px" }} onClick={() => { this.handleImgClick(7) }} >


          </p>
          <p className="ImgContainer" style={{ width: "30%", height: "60px" }} onClick={() => { this.handleImgClick(8) }} >


          </p>


        </div>
        <p className="startGameBtn">
           {this.state.mainButton}
        </p>

      </Fragment>
    );
  }
}

export default App;
