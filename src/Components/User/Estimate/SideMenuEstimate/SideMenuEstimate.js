import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { useStyles } from './SideMenuEstimate.mui'
import './SideMenuEstimate.css'

const SideMenuEstimate = ({
  theme,
  sidebarTitles,
  currentTab,
  setCurrentTab,
}) => {
  const classes = useStyles()

  return (
    <div className='sidemenu-wrapper'>
      <div
        className='sidemenu-header'
        style={{ color: theme ? '#08090c' : '' }}
      >
        Estimates
      </div>

      {sidebarTitles.map((x, index) => (
        <>
          <div
            className='sidemenu-tabs-wrapper'
            style={{
              backgroundColor: currentTab === x ? '#ffb600' : '',
            }}
          >
            <div
              className='sidemenu-tabs'
              style={{
                color: theme ? '#08090c' : currentTab === x ? '#08090c' : '',
                padding: currentTab === x ? '5px' : '',
              }}
              key={index}
              onClick={() => setCurrentTab(x)}
            >
              <ArrowBackIosIcon className={classes.icon} />
              {x}
            </div>
          </div>
        </>
      ))}
    </div>
  )
}

export default SideMenuEstimate
