import React, { useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useStyles } from './TopMenuEstimate.mui'
import './TopMenuEstimate.css'

const TopMenuEstimate = ({
  theme,
  sidebarTitles,
  currentTab,
  setCurrentTab,
}) => {
  const classes = useStyles()

  const [title, setTitle] = useState(sidebarTitles[0])

  return (
    <div className='topbar-container'>
      <div className='topbar'>
        <FormControl
          className={theme ? classes.formControlLight : classes.formControl}
          InputProps={{ disableOutline: true }}
        >
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={currentTab}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
            inputProps={{
              classes: { icon: theme ? classes.iconLight : classes.icon },
            }}
            MenuProps={{
              classes: {
                paper: theme ? classes.selectLight : classes.select,
              },
            }}
            className={theme ? classes.dropdownLight : classes.dropdown}
          >
            {sidebarTitles.map((x, i) => (
              <MenuItem onClick={() => setCurrentTab(x)} value={x} key={i}>
                {x}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  )
}

export default TopMenuEstimate
