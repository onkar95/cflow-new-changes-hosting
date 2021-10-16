import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: '2rem',
    backgroundColor: '#08090c',
    borderRadius: '4px',
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #2D2D2D',
      borderRadius: '4px',
      color: 'white',
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

  formControlLight: {
    marginTop: '2rem',
    backgroundColor: '#E0DED8',
    borderRadius: '4px',
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #E0DED8',
      borderRadius: '4px',
      color: 'black',
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

  dropdown: {
    color: 'white',
    backgroundColor: '#08090c',
  },

  dropdownLight: {
    color: 'black',
    backgroundColor: '#E0DED8',
  },

  select: {
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

  selectLight: {
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
    fill: '#ffb600',
  },

  iconLight: {
    fill: '#ffb600',
  },
}))
