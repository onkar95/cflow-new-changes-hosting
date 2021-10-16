import React from 'react'
import './Requests.css'
const BreadCrumb = ({ userId, theme }) => {
  return (
    <div className='breadcrumbsuser'>
      {userId === undefined ? (
        <h3 style={{ color: theme ? '#08090C' : '' }}>
          Home / <span style={{ color: '#FFB600' }}>Requests</span>
        </h3>
      ) : (
        <h3 style={{ color: theme ? '#08090C' : '' }}>
          Home / Requests /{' '}
          <span style={{ color: '#FFB600' }}>New Requests</span>
        </h3>
      )}
    </div>
  )
}

export default BreadCrumb
