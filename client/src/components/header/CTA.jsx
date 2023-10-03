import React from 'react'
import CV from '../../assets/resume.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Know me More!</a>
    </div>
  )
}

export default CTA