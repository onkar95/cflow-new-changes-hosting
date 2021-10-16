import React, { useState, useEffect } from 'react'
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  TextField,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from '@mui/material'
// import { alpha, styled } from '@mui/material/styles'
import { useStyles } from './PCC_RCC_mui'
import './PCC_RCC.css'

const PCC_RCC = ({ theme }) => {
  const units = ['cm', 'm', 'inch', 'ft']
  const areaUnits = ['Cu.m', 'Cu.ft']
  const pccGrades = ['1:1.5:3', '1:2:4', '1:3:6', '1:4:8', '1:5:10', '1:6:12']
  const rccGrades = [
    'M5',
    'M7.5',
    'M10',
    'M20',
    'M25',
    'M30',
    'M40',
    'M45',
    'M50',
  ]
  const [selectedValue, setSelectedValue] = useState('a')
  const [currentUnit, setCurrentUnit] = useState('')
  const [currentAreaUnit, setCurrentAreaUnit] = useState(areaUnits[0])
  const [currentPCCGrades, setCurrentPCCGrades] = useState(pccGrades[0])
  const [currentRCCGrades, setCurrentRCCGrades] = useState(rccGrades[0])
  const [length, setLength] = useState('')
  const [breadth, setBreadth] = useState('')
  const [height, setHeight] = useState('')
  const [area, setArea] = useState('')
  const [typeRatio, setTypeRatio] = useState('')

  const classes = useStyles()

  // const CssTextField = styled(TextField)({
  //   '& .MuiInput-underline:after': {
  //     borderBottomColor: '#ffb600',
  //   },
  //   '& .MuiOutlinedInput-root': {
  //     '& fieldset': {
  //       borderColor: 'white',
  //     },
  //     '&:hover fieldset': {
  //       borderColor: 'white',
  //     },
  //     '&.Mui-focused fieldset': {
  //       borderColor: '#ffb600',
  //     },
  //   },
  // })

  const handleChange = (e) => {
    setSelectedValue(e.target.value)
  }

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'radio-button',
    inputProps: { 'aria-label': item },
  })

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
    <div className='pcc-rcc-container'>
      {/* Upper Div */}
      <div className='upper-div'>
        {/*Left Div */}
        <div className='left-div'>
          {/* Radio Container */}
          <div className='radio-container'>
            <div
              className='category-select-txt'
              style={{ color: theme ? 'black' : '' }}
            >
              Select a category
            </div>

            {/* Radio Buttons */}
            <div className='radio-btn-wrapper'>
              <FormControl component='fieldset'>
                <RadioGroup
                  row
                  aria-label='category'
                  name='row-radio-buttons-group'
                >
                  <FormControlLabel
                    value='PCC'
                    control={
                      <Radio
                        {...controlProps('a')}
                        sx={{
                          color: '#ffb600',
                          '&.Mui-checked': {
                            color: '#ffb600',
                          },
                        }}
                      />
                    }
                    label='PCC'
                  />
                  <FormControlLabel
                    value='RCC'
                    control={
                      <Radio
                        {...controlProps('b')}
                        sx={{
                          color: '#ffb600',
                          '&.Mui-checked': {
                            color: '#ffb600',
                          },
                        }}
                      />
                    }
                    label='RCC'
                    style={{ marginLeft: '2px' }}
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>

          {/* Length Breadth Height form */}
          <div className='length-breadth-height-form-wrapper'>
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
                placeholder='Enter Breadth'
                id='custom-css-outlined-input'
                value={breadth}
                onChange={(e) => setBreadth(e.target.value)}
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
                className={classes.breadthform}
              />
              <div className='units'>{currentUnit}</div>
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

          {/* Total Area Form */}

          <div className='total-area-form-div'>
            <TextField
              type='number'
              placeholder='Total Area'
              id='custom-css-outlined-input'
              value={area}
              onChange={(e) => setArea(e.target.value)}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel1,
                  focused: classes.cssFocused1,
                },
              }}
              InputProps={{
                classes: {
                  root: theme
                    ? classes.cssOutlinedInput1Light
                    : classes.cssOutlinedInput1,
                  focused: theme
                    ? classes.cssFocused1Light
                    : classes.cssFocused1,
                  notchedOutline: theme
                    ? classes.notchedOutline1Light
                    : classes.notchedOutline1,
                },
              }}
              className={classes.totalareaform}
            />
            <FormControl
              className={
                theme ? classes.formControl1Light : classes.formControl1
              }
              InputProps={{ disableOutline: true }}
            >
              <InputLabel
                id='demo-simple-select-label'
                name='unit'
                placeholder='Unit'
                style={{
                  color: theme ? 'black' : 'white',
                }}
              >
                Units
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={currentAreaUnit}
                onChange={(e) => setCurrentAreaUnit(e.target.value)}
                label='Units'
                style={{
                  width: winsize < '424' ? '4.5rem' : '6rem',
                  height: winsize < '424' ? '3rem' : '',
                  color: theme ? 'black' : 'white',
                  fontSize: winsize < '424' ? '10px' : '',
                }}
                inputProps={{
                  classes: { icon: theme ? classes.iconLight : classes.icon },
                }}
                MenuProps={{
                  classes: {
                    paper: theme ? classes.select1Light : classes.select1,
                  },
                }}
              >
                {areaUnits.map((areaUnit, i) => (
                  <MenuItem
                    onClick={() => setCurrentAreaUnit(areaUnit)}
                    value={areaUnit}
                    key={i}
                  >
                    {areaUnit}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          {/* Calculate PCC Grades */}

          <div className='pcc-grades-div'>
            <div
              className='pcc-grades-header'
              style={{ color: theme ? 'black' : '' }}
            >
              {selectedValue === 'a'
                ? 'Calculate PCC Grades'
                : 'Calculate RCC Grades'}
            </div>
            <FormControl
              className={
                theme ? classes.formControl2Light : classes.formControl2
              }
              InputProps={{ disableOutline: true }}
            >
              {/* <InputLabel
                id='demo-simple-select-label'
                name='unit'
                placeholder='Unit'
                style={{ color: 'white' }}
              >
                Units
              </InputLabel> */}
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={
                  selectedValue === 'a' ? currentPCCGrades : currentRCCGrades
                }
                onChange={(e) => {
                  selectedValue === 'a'
                    ? setCurrentPCCGrades(e.target.value)
                    : setCurrentRCCGrades(e.target.value)
                }}
                style={{
                  color: theme ? 'black' : 'white',
                  border: theme ? '1px solid black' : '1px solid white',
                }}
                inputProps={{
                  classes: { icon: theme ? classes.iconLight : classes.icon },
                }}
                MenuProps={{
                  classes: {
                    paper: theme ? classes.select2Light : classes.select2,
                  },
                }}
              >
                {selectedValue === 'a'
                  ? pccGrades.map((grades, i) => (
                      <MenuItem
                        onClick={() => setCurrentPCCGrades(grades)}
                        value={grades}
                        key={i}
                      >
                        {grades}
                      </MenuItem>
                    ))
                  : rccGrades.map((grades, i) => (
                      <MenuItem
                        onClick={() => setCurrentRCCGrades(grades)}
                        value={grades}
                        key={i}
                      >
                        {grades}
                      </MenuItem>
                    ))}
              </Select>
            </FormControl>
            <TextField
              type='number'
              placeholder='Type Ratio (Cement:Sand:Ballast)'
              id='custom-css-outlined-input'
              value={typeRatio}
              onChange={(e) => setTypeRatio(e.target.value)}
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
              className={classes.gradesform}
            />
            <div
              className='pcc-grades-txt'
              style={{ color: theme ? 'black' : 'white' }}
            >
              Note : Expected compressive strength at 28 Days.
            </div>
          </div>

          {/* Button Div */}

          <div className='btn-container'>
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
        {/* Right Div */}
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
              style={{ color: theme ? 'black' : 'white' }}
            >
              Recent Calculation :
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
              Breadth : {breadth} {currentUnit}
            </div>
            <div
              className='calc-results'
              style={{ color: theme ? 'black' : 'white' }}
            >
              Height : {height} {currentUnit}
            </div>
            <div
              className='calc-results'
              style={{ color: theme ? 'black' : 'white' }}
            >
              Total Area : {area} {currentAreaUnit}
            </div>
            <div
              className='calc-results'
              style={{ color: theme ? 'black' : 'white' }}
            >
              {selectedValue === 'a'
                ? `Pcc Grades : ${currentPCCGrades}`
                : `Rcc Grades ${currentRCCGrades}`}
            </div>

            <hr
              style={{ width: '100%', marginTop: '2rem', marginBottom: '1rem' }}
            />

            <div
              className='calc-results'
              style={{ color: theme ? 'black' : 'white' }}
            >
              Quantity of ballast : {currentAreaUnit}
            </div>
            <div
              className='calc-results'
              style={{ color: theme ? 'black' : 'white' }}
            >
              Quantity of Sand : {currentAreaUnit}
            </div>
            <div
              className='calc-results'
              style={{ color: theme ? 'black' : 'white' }}
            >
              Quantity of Cement : Bags
            </div>
          </div>
        </div>
      </div>
      <hr style={{ width: '100%', marginTop: '2rem', marginBottom: '2rem' }} />
      {/* Lower Div */}
      <div className='results-header'>Results</div>
      <div className='lower-div'>
        <div className='quantity' style={{ color: theme ? 'black' : 'white' }}>
          Quantity of ballast {'\u00A0'} {'\u00A0'} {currentAreaUnit}
        </div>
        <div className='quantity' style={{ color: theme ? 'black' : 'white' }}>
          Quantity of sand {'\u00A0'} {'\u00A0'} {currentAreaUnit}
        </div>
        <div className='quantity' style={{ color: theme ? 'black' : 'white' }}>
          Quantity of cement {'\u00A0'} {'\u00A0'} bags
        </div>
      </div>
    </div>
  )
}

export default PCC_RCC
