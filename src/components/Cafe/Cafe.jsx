// Gmaps URL example: `https://www.google.com/maps/search/?api=1&query=Starbucks Meguro,Tokyo`;

import React from 'react';
import "./Cafe.css";

function Cafe({cafe}) {
  const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${cafe.title} ${cafe.address}`;

  return (
    <div className="cafe-card">
      <img src={cafe.picture} alt="" />
      <div>
        <div>
          <h5>{cafe.title}</h5>
          <p>
            { cafe.criteria.map( criterion => <span key={criterion}>{criterion}</span>)}
          </p>
        </div>
        <a target="_blank" href={gmapsUrl}>Show the map 📍</a>
      </div>
    </div>
  );
}

export default Cafe;
