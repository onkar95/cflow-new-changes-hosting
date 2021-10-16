import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import './Requests.css'
import Box from '../../../Images/Select Product.svg'

const RequestsUnavailable = ({ theme }) => {
  const history = useHistory()

  const handleRedirect = (e) => {
    e.preventDefault()
    history.push('/auth-user')
  }

  return (
    <div
      className='requests-unavailable-container'
      style={{ backgroundColor: theme ? '#ffffff' : '' }}
    >
      <div className='box-svg'>
        <img src={Box} alt='box-svg' style={{ width: '100%' }} />
      </div>

      <div
        className='requests-unavailable-header'
        style={{ color: theme ? '#08090C' : '' }}
      >
        Request page unavailable
      </div>

      <div className='request-unavailable-desc'>
        Login and complete your profile to view the requests
      </div>

      <div className='request-unavailable-btn'>
        <Button
          variant='contained'
          onClick={handleRedirect}
          style={{
            backgroundColor: '#FFB600',
            borderRadius: '4px',
            padding: '1.8rem 4rem',
          }}
        >
          <div className='request-unavailable-btn-text'>Login now</div>
        </Button>
      </div>
    </div>
  )
}

export default RequestsUnavailable
