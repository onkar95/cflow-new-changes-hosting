import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Grid from '@material-ui/core/Grid'
import './HomeUser.css'

const Navbar = ({
  sections,
  currentSection,
  setCurrentSection,
  sections_logo_black,
  sections_logo_white,
  setIsToggled,
  modalOpen
}) => {
  return (
    <div className='home_user_sections'>
      {/* {sections.map((section, index) => ( */}
      <div
        className='home_user_section'
        style={currentSection === 0 ? { color: '#ffb600' } : {}}
        onClick={() => setCurrentSection(0)}
        key={0}
      >
        <h4>Home</h4>
      </div>
      <div
        className='home_user_section'
        style={currentSection === 1 ? { color: '#ffb600' } : {}}
        onClick={() => setCurrentSection(1)}
        key={1}
      >
      <h4>Services</h4>
      </div>
      <div
        className='home_user_section'
        style={currentSection === 2 ? { color: '#ffb600' } : {}}
        onClick={() => setCurrentSection(2)}
        key={2}
      >
      <h4>Request</h4>
      </div>
      <div
        className='home_user_section'
        style={currentSection === 3 ? { color: '#ffb600' } : {}}
        onClick={() => setCurrentSection(3)}
        key={3}
      >
        <h4 style={{marginTop:"70px"}}>Estimates</h4>
        <h5 style={{backgroundColor:"rgba(255, 182, 0, 0.1)",color:"rgb(255, 182, 0)",padding:"5px"}}>Comming Soon</h5>
      </div>
      <div
        className='home_user_section'
        style={currentSection === 4 ? { color: '#ffb600' } : {}}
        onClick={() => setCurrentSection(4)}
        key={4}
      >
        <h4 style={{marginTop:"70px"}}>My Tendor</h4>
        <h5 style={{backgroundColor:"rgba(255, 182, 0, 0.1)",color:"rgb(255, 182, 0)",padding:"5px"}}>Comming Soon</h5>

      </div>

      {/* ))} */}
    </div>
  )
}

export default Navbar