import Dialog from '@material-ui/core/Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import Fb from '../../../../Images/Facebook.png';
import Insta from '../../../../Images/Instagram.png';
import Logo from '../../../../Images/Logo.png';
import Logout from '../../../../Images/PopImages/Logout.png';
import Twitter from '../../../../Images/Twitter.png';
import './LogoutPopup.css';



const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    width: "560px",
    overflow: "visible",
    background: "#121417",
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  mainPaper:{
    backgroundColor:"#121417",
    maxWidth:"100%",
    "&.MuiDialog-paperWidthSm": {
      backgroundColor:"#121417",
      maxWidth:"100%"
    }
  },
  "@global":{
    ".MuiDialog-paperWidthSm": {
      backgroundColor:"#121417",
      maxWidth:"100%",
      overflowX:"hidden"
    }
  }
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: '5px 16px',
    width: "560px",
    background: "#121417",
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs({ open, setOpen, handleLogout }) {



  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  const handleClose = () => {
    setOpen(false);
  };
  const classes=styles
  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} classes={{paperWidthSm:classes.mainPaper}} paperWidthSm={classes.mainPaper}>
        <DialogTitle onClose={handleClose} style={{ padding: '5px 16px 0px 16px' }}>
        </DialogTitle>
        <DialogContent style={{ margin: "auto", textAlign: 'center', height:"350px", width:"94.6%" }}>
          <img src={Logout} style={{ width: "120px", display: "block", margin: "auto", marginTop:"100px" }} />
          <p style={{ color: "#FFB600", fontFamily: "Montserrat", fontSize: "35px", fontWeight: "bold", margin: '4px 0px' }}>Logout of your account?</p>
          <p style={{ color: "#FFB600", fontSize: '20px', margin: '0px' }}>All your data is saved</p>
        </DialogContent>
        <div className="ButtonContainer">
          <button className="ButtonLogoutModal" onClick={() => handleLogout()}>
            Logout
          </button>
          <br />
          <button className="ButtonLogoutCancel" onClick={handleClose}>
            Cancel
          </button>
        </div>
        {/*<div className="SocialLogo">
          <a href="#" ><img src={Fb} /></a>
          <a href="#"><img src={Insta} /></a>
          <a href="#"><img src={Twitter} /></a>
        </div>*/}
      </Dialog>
    </div>
  );
}