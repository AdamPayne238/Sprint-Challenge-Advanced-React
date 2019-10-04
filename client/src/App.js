import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import PlayersList from "./components/PlayersList";

class App extends Component{
  constructor(){
    super();
    this.state = {
      players: []
  }
  };
  
  componentDidMount(){
    axios
      .get('http://localhost:5000/api/players')
      .then(response => {
        console.log("Response", response.data)
        this.setState({
          players: response.data
        });
      }, [])
      .catch(error => console.log("Error", error))
  }

  handleChanges = event => {
    this.setState({
      playersName: event.target.value
    });
  };

  render(){
    return(
      <div className="App">
        <p></p>
      <PlayersList 
      players={this.state.players}
      />
      </div>
    )
  }
}

export default App;