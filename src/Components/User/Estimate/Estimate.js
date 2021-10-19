import React, { useState, useEffect } from 'react'
import BreadCrumb from './BreadCrumb'
import EstimatesUnavailable from './EstimatesUnavailable'
import PCC_RCC from './EstimateContents/PCC_RCC/PCC_RCC'
import BrickEstimation from './EstimateContents/BrickEstimation/BrickEstimation'
import PlasterEstimation from './EstimateContents/PlasterEstimation/PlasterEstimation'
import FloorEstimation from './EstimateContents/FloorEstimation/FloorEstimation'
import PaintEstimation from './EstimateContents/PaintEstimation/PaintEstimation'
import SideMenuEstimate from './SideMenuEstimate/SideMenuEstimate'
import TopMenuEstimate from './TopMenuEstimate/TopMenuEstimate'
import './Estimate.css'

const Estimate = ({
  theme,
  setCurrentSectionRequest,
  setCurrentSection,
  setCurrentSectionEstimate,
  currentSection,
  userId,
  setUserId,
}) => {
  let sidebarTitles = [
    'PCC / RCC Calculation',
    'Brick Estimation',
    'Plaster Estimation',
    'Floor Estimation',
    'Painting Estimation',
  ]

  const [currentTab, setCurrentTab] = useState(sidebarTitles[0])
  const [winsize, setwinsize] = useState(window.screen.width)
  const [winheight, setwinheight] = useState(window.screen.height)
  const handleResize = () => {
    if (window.innerWidth < 1023) {
      setwinsize(window.innerWidth)
    } else {
      setwinsize(window.innerWidth)
    }
    if (window.innerHeight < 1023) {
      setwinheight(window.innerHeight)
    } else {
      setwinheight(window.innerHeight)
    }
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    window.addEventListener('resize', handleResize)
  }, [window.screen.width, window.screen.height])

  return (
    <div
      className='estimate'
      style={{ backgroundColor: theme ? '#ffffff' : '' }}
    >
      {/* <BreadCrumb theme={theme} /> */}
      {/* {userId === undefined ? ( */}
      {true ? (
        <EstimatesUnavailable theme={theme} />
      ) : (
        <div className='estimate-content'>
          {/* Sidebar */}
          {winsize < 1024 ? (
            <>
              <div className='header' style={{ color: theme ? '#08090c' : '' }}>
                Estimates
              </div>
              <div className='topbar'>
                <TopMenuEstimate
                  theme={theme}
                  sidebarTitles={sidebarTitles}
                  currentTab={currentTab}
                  setCurrentTab={setCurrentTab}
                />
              </div>
            </>
          ) : (
            <div className='sidebar'>
              <SideMenuEstimate
                theme={theme}
                sidebarTitles={sidebarTitles}
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
              />
            </div>
          )}

          {/* Content */}
          <div
            className='content'
            style={{ backgroundColor: theme ? '#F6F5F2' : '' }}
          >
            {currentTab === sidebarTitles[0] && <PCC_RCC theme={theme} />}
            {currentTab === sidebarTitles[1] && (
              <BrickEstimation theme={theme} />
            )}
            {currentTab === sidebarTitles[2] && (
              <PlasterEstimation theme={theme} />
            )}
            {currentTab === sidebarTitles[3] && (
              <FloorEstimation theme={theme} />
            )}
            {currentTab === sidebarTitles[4] && (
              <PaintEstimation theme={theme} />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Estimate