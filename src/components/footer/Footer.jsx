import React from 'react'
import github from '../../assets/images/github.svg'
import linkedin from '../../assets/images/linkedin.svg'

function Footer() {
  return (
    <>
    <footer className='footerContainer'>
      <div className='footerContent'>
        <ul className='footerLinks'>
          <li>Home</li>
          <li>Experience</li>
          <li>Skills</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
        <ul className='socialMedia'>
          <li><img src={linkedin} alt="linkein"/></li>
          <li><img src={github} alt="github"/></li>
        </ul>
      </div>
    </footer>
    </>
  )
}

export default Footer