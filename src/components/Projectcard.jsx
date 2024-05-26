import React from 'react'
import './css/Projectcard.css'

export const Projectcard = ({title, description , technologies , link})  =>  {
return (
   
    <div className='project-card' >
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-badge">{tech}</span>
        ))}
      </div>
    </div>
  )
}

export default Projectcard
