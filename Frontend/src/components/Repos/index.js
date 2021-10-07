import React from 'react'
import './index.css'

function Repos({dataRepos}) {
    return (
      <div className="repo">
        <ul>
          {dataRepos.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      </div>
    );
}

export default Repos
