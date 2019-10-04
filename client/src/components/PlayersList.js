
// - [ ] Class component that fetches data from the server you now have running - the data can be fetched from `http://localhost:5000/api/players`
// - [ ] Display the player data you receive from the API

import React from 'react';

function PlayersList(props){
console.log("props", props)
    return(
        <div>
          {props.players.map(players => {
              return(
                <div className="followers">
                    {/* <img  src={followers.avatar_url} alt={followers.login} /> */}
                    <h1>{players.name}</h1>
                    {/* <p key={followers.id}>{followers.login}</p> */}
                </div>
              )})}
        </div>
    );
}

export default PlayersList; 