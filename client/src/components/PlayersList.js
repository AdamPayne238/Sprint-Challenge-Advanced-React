import React from 'react';
import styled from "styled-components";

function PlayersList(props){
console.log("props", props)
    return(
        <div>
          {props.players.map(players => {
              return(
                <PlayerContainer className="followers">
                    <h1>{players.name}</h1>
                    <h2>Country: {players.country}</h2>
                    <h3>Searches: {players.searches}</h3>
                </PlayerContainer>
              )})}
        </div>
    );
}

export default PlayersList; 

const PlayerContainer = styled.div`
border-radius: 5px;
text-align: center;
background: blue;
height: 300px;
width: 30%;
margin: 0 auto;
text-align: center;
h2{
    line-height: 150px;
}
`;