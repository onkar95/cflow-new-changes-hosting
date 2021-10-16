import React, { useState, useEffect } from 'react'
import './BrickEstimation.css'
import {
  FormControl,
  TextField,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from '@mui/material'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import { useStyles } from './BrickEstimation.mui'

const BrickEstimation = ({ theme }) => {
  const classes = useStyles()

  const units = ['cm', 'm', 'inch', 'ft']
  const thickness = [
    '1/2 brick thick',
    '1 brick thick',
    '1 1/2 brick thick',
    '2 brick thick',
    '2 1/2 brick thick',
    '3 brick thick',
  ]
  const mortarRatio = ['1:3', '1:4', '1:5', '1:6']

  const [currentUnit, setCurrentUnit] = useState('')
  const [length, setLength] = useState('')
  const [height, setHeight] = useState('')
  const [length2, setLength2] = useState('')
  const [height2, setHeight2] = useState('')
  const [area, setArea] = useState('')
  const [deductedArea, setDeductedArea] = useState('')
  const [currentThickness, setCurrentThickness] = useState('')
  const [currentMortarRatio, setCurrentMortarRatio] = useState('')
  const [count, setCount] = useState(1)

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
    <div className='brick-container'>
      {/* Upper Div */}
      <div className='upper-div'>
        {/* Left Div */}
        <div className='left-div'>
          <div className='room-area-calc'>
            <div
              className='room-area-calc-header'
              style={{ color: theme ? 'black' : 'white' }}
            >
              Room Area Calculation
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                cursor: 'pointer',
              }}
            >
              <ControlPointIcon
                style={{
                  color: '#FFB600',
                  width: winsize < '424' ? '20%' : '',
                }}
              />
              <div
                className='add-new-rooms'
                style={{ marginLeft: '5px', color: theme ? 'black' : 'white' }}
                onClick={() => setCount(2)}
              >
                Add new rooms
              </div>
            </div>
          </div>

          {/* Lenght and Height Input */}

          <div
            className='room-number'
            style={{ color: theme ? 'black' : 'white' }}
          >
            Room 1
          </div>
          <div className='length-height-form-div'>
            <div>
              <TextField
                type='number'
                placeholder='Enter Length'
                id='custom-css-outlined-input'
                value={length}
                onChange={(e) => setLength(e.target.value)}
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: theme
                      ? classes.cssFocusedLight
                      : classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: theme
                      ? classes.cssOutlinedInputLight
                      : classes.cssOutlinedInput,
                    focused: theme
                      ? classes.cssFocusedLight
                      : classes.cssFocused,
                    notchedOutline: theme
                      ? classes.notchedOutlineLight
                      : classes.notchedOutline,
                  },
                }}
                className={classes.lengthform}
              />
              <FormControl
                className={
                  theme ? classes.formControlLight : classes.formControl
                }
                InputProps={{ disableOutline: true }}
              >
                <InputLabel
                  id='demo-simple-select-label'
                  name='unit'
                  placeholder='Unit'
                  style={{
                    color: theme ? 'black' : 'white',
                    fontSize: winsize < '424' ? '10px' : '',
                  }}
                >
                  Units
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={currentUnit}
                  onChange={(e) => setCurrentUnit(e.target.value)}
                  label='Units'
                  style={{
                    width: winsize < '424' ? '4.5rem' : '6rem',
                    height: winsize < '424' ? '3rem' : '',
                    color: theme ? 'black' : 'white',
                  }}
                  inputProps={{
                    classes: { icon: theme ? classes.iconLight : classes.icon },
                  }}
                  MenuProps={{
                    classes: {
                      paper: theme ? classes.selectLight : classes.select,
                    },
                  }}
                >
                  {units.map((unit, i) => (
                    <MenuItem
                      onClick={() => setCurrentUnit(unit)}
                      value={unit}
                      key={i}
                    >
                      {unit}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <TextField
                type='number'
                placeholder='Enter Height'
                id='custom-css-outlined-input'
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: theme
                      ? classes.cssFocusedLight
                      : classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: theme
                      ? classes.cssOutlinedInputLight
                      : classes.cssOutlinedInput,
                    focused: theme
                      ? classes.cssFocusedLight
                      : classes.cssFocused,
                    notchedOutline: theme
                      ? classes.notchedOutlineLight
                      : classes.notchedOutline,
                  },
                }}
                className={classes.heightform}
              />
              <div className='units'>{currentUnit}</div>
            </div>
          </div>

          {count === 2 && (
            <>
              <div
                className='room-number'
                style={{ color: theme ? 'black' : 'white' }}
              >
                Room 2
              </div>
              <div className='length-height-form-div'>
                <div>
                  <TextField
                    type='number'
                    placeholder='Enter Length'
                    id='custom-css-outlined-input'
                    value={length2}
                    onChange={(e) => setLength2(e.target.value)}
                    InputLabelProps={{
                      classes: {
                        root: classes.cssLabel,
                        focused: theme
                          ? classes.cssFocusedLight
                          : classes.cssFocused,
                      },
                    }}
                    InputProps={{
                      classes: {
                        root: theme
                          ? classes.cssOutlinedInputLight
                          : classes.cssOutlinedInput,
                        focused: theme
                          ? classes.cssFocusedLight
                          : classes.cssFocused,
                        notchedOutline: theme
                          ? classes.notchedOutlineLight
                          : classes.notchedOutline,
                      },
                    }}
                    className={classes.lengthform}
                  />
                  <FormControl
                    className={
                      theme ? classes.formControlLight : classes.formControl
                    }
                    InputProps={{ disableOutline: true }}
                  >
                    <InputLabel
                      id='demo-simple-select-label'
                      name='unit'
                      placeholder='Unit'
                      style={{
                        color: theme ? 'black' : 'white',
                        fontSize: winsize < '424' ? '10px' : '',
                      }}
                    >
                      Units
                    </InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      value={currentUnit}
                      onChange={(e) => setCurrentUnit(e.target.value)}
                      label='Units'
                      style={{
                        width: winsize < '424' ? '4.5rem' : '6rem',
                        height: winsize < '424' ? '3rem' : '',
                        color: theme ? 'black' : 'white',
                      }}
                      inputProps={{
                        classes: {
                          icon: theme ? classes.iconLight : classes.icon,
                        },
                      }}
                      MenuProps={{
                        classes: {
                          paper: theme ? classes.selectLight : classes.select,
                        },
                      }}
                    >
                      {units.map((unit, i) => (
                        <MenuItem
                          onClick={() => setCurrentUnit(unit)}
                          value={unit}
                          key={i}
                        >
                          {unit}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <TextField
                    type='number'
                    placeholder='Enter Height'
                    id='custom-css-outlined-input'
                    value={height2}
                    onChange={(e) => setHeight2(e.target.value)}
                    InputLabelProps={{
                      classes: {
                        root: classes.cssLabel,
                        focused: theme
                          ? classes.cssFocusedLight
                          : classes.cssFocused,
                      },
                    }}
                    InputProps={{
                      classes: {
                        root: theme
                          ? classes.cssOutlinedInputLight
                          : classes.cssOutlinedInput,
                        focused: theme
                          ? classes.cssFocusedLight
                          : classes.cssFocused,
                        notchedOutline: theme
                          ? classes.notchedOutlineLight
                          : classes.notchedOutline,
                      },
                    }}
                    className={classes.heightform}
                  />
                  <div className='units'>{currentUnit}</div>
                </div>
              </div>
            </>
          )}

          {/* Thickness and Mortar Ratio dropdowns */}

          <div className='dropdown-wrapper'>
            <FormControl
              className={
                theme
                  ? classes.formControl2ThickLight
                  : classes.formControl2Thick
              }
              InputProps={{ disableOutline: true }}
            >
              <InputLabel
                id='demo-simple-select-label'
                name='thickness'
                placeholder='Thickness'
                style={{ color: theme ? 'black' : 'white' }}
              >
                Thickness
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={currentThickness}
                onChange={(e) => {
                  setCurrentThickness(e.target.value)
                }}
                inputProps={{
                  classes: { icon: theme ? classes.iconLight : classes.icon },
                }}
                MenuProps={{
                  classes: {
                    paper: theme ? classes.select2Light : classes.select2,
                  },
                }}
                className={theme ? classes.dropdownLight : classes.dropdown}
              >
                {thickness.map((thick, i) => (
                  <MenuItem
                    onClick={() => setCurrentThickness(thick)}
                    value={thick}
                    key={i}
                  >
                    {thick}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl
              className={
                theme
                  ? classes.formControl2MortarLight
                  : classes.formControl2Mortar
              }
              InputProps={{ disableOutline: true }}
            >
              <InputLabel
                id='demo-simple-select-label'
                name='mortar-ratio'
                placeholder='Mortar Ratio'
                style={{ color: theme ? 'black' : 'white' }}
              >
                Mortar Ratio
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={currentMortarRatio}
                onChange={(e) => {
                  setCurrentMortarRatio(e.target.value)
                }}
                inputProps={{
                  classes: { icon: theme ? classes.iconLight : classes.icon },
                }}
                MenuProps={{
                  classes: {
                    paper: theme ? classes.select2Light : classes.select2,
                  },
                }}
                className={theme ? classes.dropdownLight : classes.dropdown}
              >
                {mortarRatio.map((ratio, i) => (
                  <MenuItem
                    onClick={() => setCurrentMortarRatio(ratio)}
                    value={ratio}
                    key={i}
                  >
                    {ratio}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          {/* Total Area Calc */}

          <div className='total-area-calc-wrapper'>
            <TextField
              type='number'
              placeholder='Total Area'
              id='custom-css-outlined-input'
              value={area}
              onChange={(e) => setArea(e.target.value)}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: theme ? classes.cssFocusedLight : classes.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: theme
                    ? classes.cssOutlinedInputLight
                    : classes.cssOutlinedInput,
                  focused: theme ? classes.cssFocusedLight : classes.cssFocused,
                  notchedOutline: theme
                    ? classes.notchedOutlineLight
                    : classes.notchedOutline,
                },
              }}
              className={classes.totalarea}
            />
            <div>
              <Button variant='contained' className={classes.btn1}>
                Calculate
              </Button>
            </div>
          </div>

          <hr
            style={{ width: '100%', marginTop: '3rem', marginBottom: '2rem' }}
          />

          {/* Deduction */}

          <div className='deduction-wrapper'>
            <div
              className='deduction-header'
              style={{ color: theme ? 'black' : 'white' }}
            >
              Deduction For opening
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                cursor: 'pointer',
              }}
            >
              <ControlPointIcon
                style={{
                  color: '#FFB600',
                  width: winsize < '424' ? '20%' : '',
                }}
              />
              <div
                className='specs'
                style={{ marginLeft: '5px', color: theme ? 'black' : 'white' }}
              >
                Specifications
              </div>
            </div>
          </div>

          {/* Total Area after deduction */}

          <div className='deducted-area'>
            <TextField
              type='number'
              placeholder='Total Area after Deduction'
              id='custom-css-outlined-input'
              value={deductedArea}
              onChange={(e) => setDeductedArea(e.target.value)}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: theme ? classes.cssFocusedLight : classes.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: theme
                    ? classes.cssOutlinedInputSmallLight
                    : classes.cssOutlinedInputSmall,
                  focused: theme ? classes.cssFocusedLight : classes.cssFocused,
                  notchedOutline: theme
                    ? classes.notchedOutlineLight
                    : classes.notchedOutline,
                },
              }}
              className={classes.totalareadeduc}
            />
            <div className='area-btn-wrapper'>
              <Button variant='contained' className={classes.btn1}>
                Calculate
              </Button>
              <Button
                variant='contained'
                className={theme ? classes.btn2Light : classes.btn2}
              >
                Reset
              </Button>
            </div>
          </div>
        </div>
        <div className='right-div'>
          {/*Recent Calc */}

          <div
            className='recent-calc-div'
            style={{ backgroundColor: theme ? '#E0DED8' : '' }}
          >
            {/* clear button */}

            <div className='recent-calc-clear-div'>
              <div className='recent-calc-clear'>Clear</div>
            </div>

            {/* Recent Calc */}

            <div
              className='recent-calc-header'
              style={{ fontWeight: 'bold', color: theme ? 'black' : 'white' }}
            >
              Recent Calculation :
            </div>
            <div
              className='calc-results'
              style={{ fontWeight: 'bold', color: theme ? 'black' : 'white' }}
            >
              Room 1
            </div>
            <div
              className='calc-results'
              style={{ color: theme ? 'black' : 'white' }}
            >
              Length : {length} {currentUnit}
            </div>
            <div
              className='calc-results'
              style={{ color: theme ? 'black' : 'white' }}
            >
              Height : {height} {currentUnit}
            </div>
            {count === 2 && (
              <>
                <div
                  className='calc-results'
                  style={{
                    fontWeight: 'bold',
                    color: theme ? 'black' : 'white',
                  }}
                >
                  Room 2
                </div>
                <div
                  className='calc-results'
                  style={{ color: theme ? 'black' : 'white' }}
                >
                  Length : {length2} {currentUnit}
                </div>
                <div
                  className='calc-results'
                  style={{ color: theme ? 'black' : 'white' }}
                >
                  Height : {height2} {currentUnit}
                </div>
              </>
            )}
            <div
              className='calc-results'
              style={{ fontWeight: 'bold', color: theme ? 'black' : 'white' }}
            >
              Thickness : {currentThickness}
            </div>
            <div
              className='calc-results'
              style={{ fontWeight: 'bold', color: theme ? 'black' : 'white' }}
            >
              Mortar Ratio : {currentMortarRatio}
            </div>
            <div
              className='calc-results'
              style={{ fontWeight: 'bold', color: theme ? 'black' : 'white' }}
            >
              Total Area : {area}
            </div>
            <hr
              style={{ width: '100%', marginTop: '1rem', marginBottom: '1rem' }}
            />

            <div
              className='calc-results'
              style={{ color: theme ? 'black' : 'white' }}
            >
              Quantity of Bricks : {'\u00A0'} No.s
            </div>
            <div
              className='calc-results'
              style={{ color: theme ? 'black' : 'white' }}
            >
              Quantity of Sand : {'\u00A0'} Cu.m
            </div>
            <div
              className='calc-results'
              style={{ color: theme ? 'black' : 'white' }}
            >
              Quantity of Cement : {'\u00A0'} bags
            </div>
          </div>
        </div>
      </div>
      <hr style={{ width: '100%', marginTop: '4rem', marginBottom: '2rem' }} />
      {/*Lower Div */}
      <div className='results-header'>Results</div>
      <div className='lower-div'>
        <div className='quantity' style={{ color: theme ? 'black' : 'white' }}>
          Quantity of Bricks {'\u00A0'} {'\u00A0'} No.s
        </div>
        <div className='quantity' style={{ color: theme ? 'black' : 'white' }}>
          Quantity of sand {'\u00A0'} {'\u00A0'} Cu.m
        </div>
        <div className='quantity' style={{ color: theme ? 'black' : 'white' }}>
          Quantity of cement {'\u00A0'} {'\u00A0'} bags
        </div>
      </div>
    </div>
  )
}

export default BrickEstimation
