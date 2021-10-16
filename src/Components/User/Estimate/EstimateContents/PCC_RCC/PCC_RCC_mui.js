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

  cssOutlinedInputLight: {
    color: 'black',
    '&$cssFocusedLight $notchedOutlineLight': {
      borderColor: `#ffb600 !important`,
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
    '@media (min-width: 320px) and (max-width: 424px)': {
      fontSize: '10px',
    },
  },

  cssOutlinedInput1Light: {
    color: 'black',
    backgroundColor: '#E0DED8',
    '&$cssFocused1Light $notchedOutline1Light': {
      borderColor: `#ffb600 !important`,
    },
    '@media (min-width: 320px) and (max-width: 424px)': {
      fontSize: '10px',
    },
  },

  cssFocused1: {
    color: 'white',
  },

  cssFocused1Light: {
    color: 'black',
  },

  notchedOutline1: {
    borderWidth: '1px',
    borderColor: `#444941 !important`,
  },

  notchedOutline1Light: {
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
    '@media (min-width: 768px) and (max-width: 1023px)': {
      width: '7rem',
    },
    '@media (min-width: 425px) and (max-width: 767px)': {
      width: '9rem',
    },
    '@media (min-width: 320px) and (max-width: 420px)': {
      width: '8rem',
      height: '3rem',
    },
  },

  formControl1Light: {
    //   margin: theme.spacing(1),
    backgroundColor: '#E0DED8',
    height: '100%',
    borderRadius: '0px 4px 4px 0px',
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #E0DED8',
      borderRadius: '0px 4px 4px 0px',
      color: 'white',
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      width: '6rem',
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
      width: '7rem',
    },
    '@media (min-width: 425px) and (max-width: 767px)': {
      width: '9.2rem',
    },
    '@media (min-width: 320px) and (max-width: 420px)': {
      width: '8rem',
      height: '3rem',
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

  select1Light: {
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

  formControl2: {
    marginTop: '2rem',
    backgroundColor: '#08090c',
    height: '100%',
    width: '70%',
    borderRadius: '4px',
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #08090c',
      borderRadius: '4px',
      color: 'white',
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      width: '80%',
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
      width: '100%',
    },
    '@media (min-width: 425px) and (max-width: 767px)': {
      width: '100%',
    },
  },

  formControl2Light: {
    backgroundColor: '#E0DED8',
    height: '100%',
    width: '70%',
    borderRadius: '4px',
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #E0DED8',
      borderRadius: '4px',
      color: 'black',
    },
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      width: '80%',
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
      width: '100%',
    },
    '@media (min-width: 425px) and (max-width: 767px)': {
      width: '100%',
    },
  },

  select2: {
    '& ul': {
      backgroundColor: '#08090c',
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
    lineHeight: '18px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#08090C',
    textTransform: 'none',
    borderRadius: '4px',
    padding: '15px 30px',
    '&:hover': {
      background: '#ffc533',
    },
    '@media (min-width: 320px) and (max-width: 424px)': {
      fontSize: '10px',
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
      fontSize: '10px',
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
  breadthform: {
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

  totalareaform: {
    width: '40%',
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      width: '80%',
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

  gradesform: {
    width: '70%',
    '@media (min-width: 1024px) and (max-width: 1439px)': {
      width: '80%',
    },
    '@media (min-width: 768px) and (max-width: 1023px)': {
      width: '100%',
    },
    '@media (min-width: 425px) and (max-width: 767px)': {
      width: '100%',
    },
  },
}))
