import React, { Component, Fragment } from 'react';
import Utils from './utils'

class App extends Component {

  state = {
    playerone: "Player One",
    playertwo: 'Player Two'


  }

  componentDidMount() {

  }

  handleStartGame = () => {


    console.log("hello world")
    this.setState({
      playerone: prompt("Enter Player one name:", this.state.playerone)
    })

    this.setState({
      playertwo: prompt("Enter Player two name:", this.state.playertwo)
    })

  }

  handleImgClick  (index)  {
    console.log(index)

    var img = document.createElement("img");
    img.width = 100
    img.src = "/images/tic-tac-toe-O.png"
  
    document.getElementsByClassName('ImgContainer')[index].appendChild(img)
    
  }


  
  render() {
    return (
      <Fragment>
        <div className="App">
          <p className="ImgContainer" style={{  width:"30%", height: "60px" }} onClick={  () => { this.handleImgClick(0)}}></p>


          <p className="ImgContainer" style={{  width:"30%", height: "60px" }} onClick={() => { this.handleImgClick(1)}} >
           

          </p>

          <p className="ImgContainer" style={{  width:"30%", height: "60px" }} onClick={() => { this.handleImgClick(2)}} >
           

          </p>

          <p className="ImgContainer" style={{  width:"30%", height: "60px" }} onClick={() => { this.handleImgClick(3)}} >
           

          </p>

          <p className="ImgContainer" style={{  width:"30%", height: "60px" }} onClick={() => { this.handleImgClick(4)}} >
           

          </p>

          <p className="ImgContainer" style={{  width:"30%", height: "60px" }} onClick={() => { this.handleImgClick(5)}} >
           

          </p>

          <p className="ImgContainer" style={{  width:"30%", height: "60px" }} onClick={() => { this.handleImgClick(6)}} >
           

          </p>

          <p className="ImgContainer" style={{  width:"30%", height: "60px" }} onClick={() => { this.handleImgClick(7)}} >
           

          </p>
          <p className="ImgContainer" style={{  width:"30%", height: "60px" }} onClick={() => { this.handleImgClick(8)}} >
           

          </p>


        </div>
        <p className="startGameBtn">
          <p onClick={this.handleStartGame}> Start Game </p>
        </p>

      </Fragment>
    );
  }
}

export default App;
