import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'
import React, { useEffect, useState } from 'react'
import './HomeContentUser.css'
import unitConvertor from './unitConvertor'

const Convertor = ({ modalOpen, setModalOpen, theme }) => {
  const [value, setValue] = useState('')
  const quantity = ['Distance', 'Area', 'Weight', 'Volume']
  const [currentQuantity, setCurrentQuantity] = useState(0)
  const [currentUnitFrom, setCurrentUnitFrom] = useState(0)
  const [currentUnitTo, setCurrentUnitTo] = useState(0)

  const [answer, setAnswer] = useState(0)

  const [hover, setHover] = useState(false)

  useEffect(() => {
    setAnswer(
      unitConvertor(
        units,
        currentQuantity,
        currentUnitFrom,
        currentUnitTo,
        value
      )
    )
  }, [value, currentUnitFrom, currentUnitTo, currentQuantity])

  const useStyles = makeStyles((theme) => ({
    formControl: {
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(2),
      // width:1000,
      backgroundColor: '#2D2D2D',
      // height:79,
      borderRadius: theme.spacing(1),
      '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: '1px solid #484850',
        borderRadius: '5px 5px 0 0',
        color: 'white',
      },
    },
    formControl1: {
      // marginRight: theme.spacing(2),
      // marginTop: theme.spacing(2),
      backgroundColor: '#2D2D2D',
      borderRadius: theme.spacing(1),
      height: 128,
      '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: '1px solid #484850',
        borderRadius: '5px 5px 0 0',
        color: 'white',
      },
    },
    input: {
      "& .MuiSelect-selectMenu": {backgroundColor:"white", color:"black", height:"0px"}
   },
    input1: {
      // color: theme ? '#000000' : 'white',
      color: 'white',
    },
    input2: {
      color: '#000000',
    },
    select: {
      '& .MuiSvgIcon-root': {
        color: 'white',
        fontSize: '2rem',
      },
    },
    icon: {
      fill: 'white',
      marginLeft: '30px',
      paddingLeft: '30px',
    },
    dropdownStyle: 
    {
         backgroundColor:"white"
    },

  }))
  const classes = useStyles()

  const units = [
    ['mm', 'cm', 'm', 'km', 'yd', 'mi', 'ft', 'in'],
    ['mm2', 'cm2', 'm2', 'km2', 'yd2', 'mi2', 'ft2', 'in2'],
    ['mg', 'g', 'kg', 't', 'lb'],
    ['mm3', 'cm3', 'm3', 'km3', 'mi3', 'yd3', 'ft3', 'in3'],
  ]

  return (
    <div
      className='home-content-convertor'
      style={{ background: theme ? '#ffffff' : '' }}
    >
      <div className='home-content-convertor-title-wrapper'>
        <h1
          className='home-content-convertor-title'
          style={{ color: theme ? '#000000' : '' }}
        >
          Unit Convertor
        </h1>
      </div>

      <CloseIcon
        onClick={() => {
          setModalOpen(false)
        }}
        style={{
          position: 'absolute',
          right: '10',
          cursor: 'pointer',
          color: theme ? '#000000' : '',
        }}
      />
      {/* <FormControl variant='outlined' className={`${classes.formControl} unit-input`}  inputprops={{ disableOutline: true}} >
                                      <InputLabel id='demo-simple-select-label' style={{color:"white",height:79}}> Select Unit </InputLabel>
                                      <Select 
                                      labelId='demo-simple-select-label' 
                                      id='demo-simple-select' 
                                      style={{backgroundColor: "#2D2D2D", color:"white"}} 
                                      inputProps={{
                                          classes: {
                                              
                                              icon: classes.icon
                                          },
                                      }}>
                                          {quantity.map((item, index) => (
                                              <MenuItem  onClick={() =>setCurrentQuantity(index)} value={index} key={index}>
                                                  {item}
                                              </MenuItem>
                                          ))}
                                      </Select>
                                  </FormControl> */}
      {/* new update start */}
      {theme ? (
        <div className='converter-quantity-light'>
          {quantity.map((item, index) => (
            <p
              onClick={() => setCurrentQuantity(index)}
              value={index}
              key={index}
              // style={{
              //   backgroundColor: '#C4C4C466',
              //   color: '#121417',
              // }}
              // onMouseEnter={() => setHover(true)}
              // onMouseLeave={() => setHover(false)}
            >
              {item}
            </p>
          ))}
        </div>
      ) : (
        <div className='converter-quantity'>
          {quantity.map((item, index) => (
            <p
              onClick={() => setCurrentQuantity(index)}
              value={index}
              key={index}
              // style={{
              //   backgroundColor: theme ? '#C4C4C466' : '',
              //   color: theme ? '#121417' : '',
              // }}
              // onMouseEnter={() => setHover(true)}
              // onMouseLeave={() => setHover(false)}
            >
              {item}
            </p>
          ))}
        </div>
      )}

      {/* new update end */}

      <div className='units-main-div'>
        {/* <div> */}
        <FormControl
          style={{ flexDirection: 'row-reverse' }}
          variant='outlined'
          className={`${classes.formControl1} unit-input-2`}
          inputprops={{ disableOutline: true }}
        >
          <InputLabel
            id='demo-simple-select-label'
            style={{
              marginLeft: '71%',
              color: theme ? '#000000' : '#FFB600',
              height: '45%',
              fontSize: 16,
              fontWeight: '600',
            }}
          >
            {' '}
            Select Unit{' '}
          </InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            style={{
              width: '30%',
              backgroundColor: theme ? '#C4C4C4' : '#2D2D2D',
              color: theme ? '#000000' : '#FFB600',
            }}
            className={classes.select}
            MenuProps={{ classes: { list: theme?classes.dropdownStyle:"" } }}
          >
            {units[currentQuantity].map((item, index) => (
              <MenuItem
                style={{
                  color: theme ? '#000000' : '#FFB600',
                  backgroundColor: theme ? 'white' : 'black',
                }}
                onClick={() => setCurrentUnitFrom(index)}
                value={index}
                key={index}
              >
                {item}
              </MenuItem>
            ))}
          </Select>
          <TextField
            placeholder='Enter Value'
            type='number'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{
              width: '70%',
              height: '99%',
              color: theme ? '#000000' : '#F5F5F5',
              backgroundColor: theme ? '#F5F5F5' : '#121417',
              justifyContent: 'center',
              paddingLeft: '1rem',
              fontSize: 16,
              fontWeight: '600',
            }}
            InputProps={{
              className: theme ? classes.input2 : classes.input1,
              disableUnderline: true,
            }}
          />
        </FormControl>
        {/* </div> */}

        {/* start */}
        {/* end */}

        <h2
          style={{ padding: '0px 10px', color: theme ? '#000000' : '#FFB600' }}
        >
          =
        </h2>
        {/* <div> */}
        <FormControl
          style={{ flexDirection: 'row-reverse' }}
          variant='outlined'
          className={`${classes.formControl1} unit-input-2`}
          inputprops={{ disableOutline: true }}
        >
          <InputLabel
            id='demo-simple-select-label'
            style={{
              marginLeft: '71%',
              color: theme ? '#000000' : '#FFB600',
              height: '45%',
              fontSize: 16,
              fontWeight: '600',
            }}
          >
            {' '}
            Select Unit{' '}
          </InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            style={{
              width: '30%',
              backgroundColor: theme ? '#C4C4C4' : '#2D2D2D',
              color: theme ? '#000000' : '#FFB600',
            }}
            className={classes.select}

            MenuProps={{ classes: { list: theme?classes.dropdownStyle:"" } }}
          >
            {units[currentQuantity].map((item, index) => (
              <MenuItem
                style={{
                  color: theme ? '#000000' : '#FFB600',
                  backgroundColor: theme ? 'white' : 'black',
                }}
                onClick={() => setCurrentUnitTo(index)}
                value={index}
                key={index}
              >
                {item}
              </MenuItem>
            ))}
          </Select>
          <TextField
            placeholder='Converted Value'
            value={answer ? answer : ''}
            style={{
              width: '70%',
              height: '99%',
              color: theme ? '#000000' : '#F5F5F5',
              backgroundColor: theme ? '#F5F5F5' : '#121417',
              justifyContent: 'center',
              paddingLeft: '1rem',
              fontSize: 16,
              fontWeight: '600',
            }}
            InputProps={{
              className: theme ? classes.input2 : classes.input1,
              disableUnderline: true,
            }}
          ></TextField>
        </FormControl>
        {/* </div>                              */}
      </div>
    </div>
  )
}

export default Convertor
