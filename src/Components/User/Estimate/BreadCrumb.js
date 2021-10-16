import React from 'react'
import './Estimate.css'
const BreadCrumb = ({ theme }) => {
  return (
    <div className='breadcrumbsuser'>
      <h3 style={{ color: theme ? '#08090C' : '' }}>
        Home / <span style={{ color: '#FFB600' }}>Estimates</span>
      </h3>
    </div>
  )
}

export default BreadCrumb
