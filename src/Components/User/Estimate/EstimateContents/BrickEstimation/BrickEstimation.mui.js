import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
  'input-label': {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    width: '100%',
    color: 'red',
  },

  input: {
    color: 'white',
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
      color: 'white',
    },
  },

  cssOutlinedInput: {
    color: 'white',
    '&$cssFocused $notchedOutline': {
      borderColor: `#ffb600 !important`,
    },
    '@media (min-width: 320px) and (max-width: 424px)': {
      fontSize: '10px',
    },
  },

  cssOutlinedInputSmall: {
    color: 'white',
    '&$cssFocused $notchedOutline': {
      borderColor: `#ffb600 !important`,
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      fontSize: '10px',
    },
    '@media (min-width: 320px) and (max-width: 424px)': {
      fontSize: '10px',
    },
  },

  cssOutlinedInputLight: {
    color: 'black',
    '&$cssFocusedLight $notchedOutlineLight': {
      borderColor: `#ffb600 !important`,
    },
    '@media (min-width: 320px) and (max-width: 424px)': {
      fontSize: '10px',
    },
  },

  cssOutlinedInputSmallLight: {
    color: 'black',
    '&$cssFocusedLight $notchedOutlineLight': {
      borderColor: `#ffb600 !important`,
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      fontSize: '10px',
    },
    '@media (min-width: 320px) and (max-width: 424px)': {
      fontSize: '10px',
    },
  },

  cssFocused: {
    color: 'white',
  },

  cssFocusedLight: {
    color: 'black',
  },

  notchedOutline: {
    borderWidth: '1px',
    borderColor: `white !important`,
  },

  notchedOutlineLight: {
    borderWidth: '1px',
    borderColor: `black !important`,
  },

  cssOutlinedInput1: {
    color: 'white',
    backgroundColor: '#212224',
    '&$cssFocused1 $notchedOutline1': {
      borderColor: `#ffb600 !important`,
    },
  },

  cssFocused1: {
    color: 'white',
  },

  notchedOutline1: {
    borderWidth: '1px',
    borderColor: `#444941 !important`,
  },

  select: {
    '& ul': {
      backgroundColor: '#121111',
      color: 'white',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    '& li': {
      fontSize: 16,
    },
  },

  selectLight: {
    '& ul': {
      backgroundColor: '#E0DED8',
      color: 'black',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    '& li': {
      fontSize: 16,
    },
  },

  formControl: {
    //   margin: theme.spacing(1),
    backgroundColor: '#08090c',
    height: '100%',
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #08090c',
      borderRadius: '5px 5px 0 0',
      color: 'white',
    },
  },

  formControlLight: {
    //   margin: theme.spacing(1),
    backgroundColor: '#F6F5F2',
    height: '100%',
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #F6F5F2',
      borderRadius: '5px 5px 0 0',
      color: 'black',
    },
  },

  formControl1: {
    //   margin: theme.spacing(1),
    backgroundColor: '#37383a',
    height: '100%',
    borderRadius: '0px 4px 4px 0px',
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #37383a',
      borderRadius: '0px 4px 4px 0px',
      color: 'white',
    },
  },

  select1: {
    '& ul': {
      backgroundColor: '#37383a',
      color: 'white',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    '& li': {
      fontSize: 16,
    },
  },

  formControl2Thick: {
    marginTop: '2rem',
    backgroundColor: '#08090c',
    borderRadius: '4px',
    width: '40%',
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #2D2D2D',
      borderRadius: '4px',
      color: 'white',
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      width: '50%',
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
      width: '100%',
    },
    '@media (min-width: 425px) and (max-width: 767px)': {
      width: '100%',
    },
    '@media (min-width: 320px) and (max-width: 424px)': {
      width: '100%',
    },
  },

  formControl2ThickLight: {
    marginTop: '2rem',
    backgroundColor: '#E0DED8',
    borderRadius: '4px',
    width: '40%',
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #E0DED8',
      borderRadius: '4px',
      color: 'black',
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      width: '50%',
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
      width: '100%',
    },
    '@media (min-width: 425px) and (max-width: 767px)': {
      width: '100%',
    },
    '@media (min-width: 320px) and (max-width: 424px)': {
      width: '100%',
    },
  },

  formControl2Mortar: {
    marginTop: '2rem',
    backgroundColor: '#08090c',
    borderRadius: '4px',
    marginLeft: '4rem',
    width: '40%',
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #2D2D2D',
      borderRadius: '4px',
      color: 'white',
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      marginLeft: '0',
      width: '50%',
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
      width: '100%',
      marginLeft: '0rem',
    },
    '@media (min-width: 425px) and (max-width: 767px)': {
      width: '100%',
      marginLeft: '0rem',
    },
    '@media (min-width: 320px) and (max-width: 424px)': {
      width: '100%',
      marginLeft: '0rem',
    },
  },

  formControl2MortarLight: {
    marginTop: '2rem',
    backgroundColor: '#E0DED8',
    borderRadius: '4px',
    marginLeft: '4rem',
    width: '40%',
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #E0DED8',
      borderRadius: '4px',
      color: 'black',
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      marginLeft: '0',
      width: '50%',
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
      width: '100%',
      marginLeft: '0rem',
    },
    '@media (min-width: 425px) and (max-width: 767px)': {
      width: '100%',
      marginLeft: '0rem',
    },
    '@media (min-width: 320px) and (max-width: 424px)': {
      width: '100%',
      marginLeft: '0rem',
    },
  },

  select2: {
    '& ul': {
      backgroundColor: '#2D2D2D',
      color: 'white',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    '& li': {
      fontSize: 16,
      padding: '1rem',
    },
  },

  select2Light: {
    '& ul': {
      backgroundColor: '#E0DED8',
      color: 'black',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    '& li': {
      fontSize: 16,
      padding: '1rem',
    },
  },

  icon: {
    fill: 'white',
  },

  iconLight: {
    fill: 'black',
  },

  btn1: {
    backgroundColor: '#ffb600',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#08090C',
    textTransform: 'none',
    borderRadius: '4px',
    padding: '15px 20px',
    marginLeft: '2rem',
    '&:hover': {
      background: '#ffc533',
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
      padding: '15px 20px',
    },
    '@media (min-width: 425px) and (max-width: 767px)': {
      marginLeft: '10px',
      padding: '15px 20px',
    },
    '@media (min-width: 320px) and (max-width: 424px)': {
      padding: '15px 5px',
      fontSize: '10px',
      marginLeft: '5px',
    },
  },

  btn2: {
    marginLeft: '2rem',
    backgroundColor: '#08090c',
    border: '1px solid #ffb600',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '18px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#ffb600',
    textTransform: 'none',
    borderRadius: '4px',
    padding: '15px 30px',
    '&:hover': {
      background: '#08090c',
    },
    '@media (min-width: 320px) and (max-width: 424px)': {
      padding: '15px 5px',
      fontSize: '10px',
    },
  },

  btn2Light: {
    marginLeft: '2rem',
    backgroundColor: '#F6F5F2',
    border: '1px solid #ffb600',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '18px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#ffb600',
    textTransform: 'none',
    borderRadius: '4px',
    padding: '15px 30px',
    '&:hover': {
      background: '#F6F5F2',
    },
    '@media (min-width: 320px) and (max-width: 424px)': {
      padding: '15px 5px',
      fontSize: '10px',
      marginLeft: '5px',
    },
  },

  lengthform: {
    width: '55%',
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      width: '70%',
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
      width: '82%',
    },
    '@media (min-width: 425px) and (max-width: 767px)': {
      width: '60%',
    },
    '@media (min-width: 320px) and (max-width: 424px)': {
      width: '55%',
    },
  },
  heightform: {
    width: '60%',
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      width: '70%',
      marginTop: '2rem',
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
      width: '100%',
      marginTop: '2rem',
    },
    '@media (min-width: 425px) and (max-width: 767px)': {
      width: '100%',
      marginTop: '2rem',
    },
    '@media (min-width: 320px) and (max-width: 424px)': {
      width: '100%',
      marginTop: '2rem',
    },
  },

  totalarea: {
    width: '30%',
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      width: '50%',
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
      width: '100%',
    },
    '@media (min-width: 425px) and (max-width: 767px)': {
      width: '100%',
    },
    '@media (min-width: 320px) and (max-width: 424px)': {
      width: '100%',
    },
  },

  totalareadeduc: {
    width: '40%',
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      width: '70%',
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
      width: '100%',
      marginTop: '2rem',
    },
    '@media (min-width: 425px) and (max-width: 767px)': {
      width: '100%',
    },
    '@media (min-width: 320px) and (max-width: 424px)': {
      width: '100%',
    },
  },
  dropdown: {
    color: 'white',
    backgroundColor: '#2D2D2D',
  },

  dropdownLight: {
    color: 'black',
    backgroundColor: '#E0DED8',
  },
}))
