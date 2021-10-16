// import { Button, Checkbox, makeStyles, TextField } from '@material-ui/core'
// import InputAdornment from '@material-ui/core/InputAdornment'
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
// import Visibility from "@material-ui/icons/Visibility"
// import VisibilityOff from "@material-ui/icons/VisibilityOff"
// import axios from "axios"
// import { passwordStrength } from 'check-password-strength'
// import React, { useEffect, useState } from 'react'
// import OtpInput from 'react-otp-input'
// import { useDispatch } from "react-redux"
// import { Link, useHistory } from 'react-router-dom'
// import { toast, ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import validator from 'validator'
// import { signin, signup } from "../../actions/auth"
import bgs from "../../Images/bgs.png"
import bgb from "../../Images/bgb.png"
// import Facebook from "../../Images/Facebook.png"
// import Instagram from "../../Images/Instagram.png"
// import LinkedIn from "../../Images/Linkedin.svg"
import otpbg from "../../Images/otpbg.png"
import mailsheild from "../../Images/mailshield.png"
import phoneshake from "../../Images/phoneshake.png"
import CheckBox  from "../../Images/CheckBox.png"
import s1 from "../../Images/bigpartup.png"
import s2 from "../../Images/smallpartup.png"
import s3 from "../../Images/smallpartdown.png"
import s4 from "../../Images/bigpartdown.png"

// // import InfoImage from "../../Images/LoginInfo.png"
// import Logo from "../../Images/Logo.png"
// import Twitter from "../../Images/Twitter.png"
// import PopupSaved from "../Popup/popupsaved/PopupSaved"
// import firebase from "./Firebase"
// import "./Login.css"
import { Button, Checkbox, makeStyles, TextField } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import axios from "axios"
import { passwordStrength } from 'check-password-strength'
import React, { useEffect, useState } from 'react'
import OtpInput from 'react-otp-input'
import { useDispatch } from "react-redux"
import { Link, useHistory } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import validator from 'validator'
import { signin, signup } from "../../actions/auth"
import Facebook from "../../Images/Facebook.png"
import Instagram from "../../Images/Instagram.png"
import LinkedIn from "../../Images/Linkedin.svg"
import InfoImage from "../../Images/LoginInfo.png"
import Logo from "../../Images/Logo.png"
import Twitter from "../../Images/Twitter.png"
import PopupSaved from "../Popup/popupsaved/PopupSaved"
import firebase from "./Firebase"
import "./Login.css"
import greycheck from "../../Images/greycheck.png"
import mailB from "../../Images/mail-button.png"
import { parse } from 'dotenv'
import Subscription from "../User/Requests/Subscription"

function Login({ isSignup, setIsSignup, isUser }) {

    const [winsize, setwinsize] = useState(window.screen.width);
    const [winheight, setwinheight] = useState(window.screen.height);
    const handleResize = () => {
        if (window.innerWidth < 1000) {
            setwinsize(window.innerWidth)
        }
        else {
            setwinsize(window.innerWidth)
        }
        if (window.innerHeight < 1000) {
            setwinheight(window.innerHeight)
        }
        else {
            setwinheight(window.innerHeight)
        }
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize)
        window.addEventListener("resize", handleResize)
        console.log(winsize, winheight, "LandingPageImage")
    }, [window.screen.width, window.screen.height])

    const dispatch = useDispatch()
    const history = useHistory()

    //const [isSignup , setIsSignup] = useState(false); 
    const [section, setSection]=useState("login")
    const [otpSent, setOtpSent]=useState(false)
    const [title, setTitle]=useState("");
    const [isEmail, setIsEmail] = useState(true);
    const [isOTP, setisOTP] = useState(false);
    const [showpassword, setshow] = useState(false);
    const [password, setpassword] = useState(false);
    const [forgotPassword, setforgotPassword] = useState(false);
    const [formData, setFormData] = useState({ email: "", phone_no: "", password: "", confirmPassword: "", isUser: null });
    const [formData1, setFormData1] = useState({ email: "", password: "", isUser: isUser });
    const [alert, setAlert] = useState({ show: false, msg: '' });
    const [col, setcol] = useState("red");
    const [check, setCheck] = useState(false);
    const [open, setopen] = useState(false);
    const [otp_num, set_otp_num] = useState();
    const [forgetemail, setforgetemail] = useState("");
    const [temp1, settemp1] = useState();
    const [otp, set_otp] = useState({ a: "", b: "", c: "", d: "", e: "", f: "" });
    const [OTP, setOTP] = useState(null);

    var google;

    var provider = new firebase.auth.GoogleAuthProvider();

    const clear=()=>{
        setFormData({ email: "", phone_no: "", password: "", confirmPassword: "", isUser: null })
        setFormData1({ email: "", password: "", isUser: isUser });
    }

    const notify = (msg) =>
        toast.error(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    useEffect(() => {
        setFormData({ ...formData, isUser: isUser })
        setFormData1({ ...formData1, isUser: isUser })
    }, [isUser])


    const useStyles = makeStyles({
        root: {
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderBottomColor: "#ffffff"
            }
        },
        input: {
            color: "white",

        },
        icon: {
            fill: 'white',
        },
        "@global": {
            ".MuiInput-root": {
                height:"70px"
            }
        }
    });
    const classes = useStyles();

    const handleshow = () => {
        setshow((prev) => !prev);
    }

    const handleChange = (e) => {
        if (passwordStrength(formData.password).value === "Weak" || passwordStrength(formData.password).value === "Too weak") {
            setAlert({ show: true, msg: "Your password Strength is " + passwordStrength(formData.password).value })
        }
        else if (passwordStrength(formData.password).value === "Medium") {
            setcol("orange")
            setAlert({ show: true, msg: "Your password Strength is " + passwordStrength(formData.password).value })

        }
        else {
            setcol("green")
            setAlert({ show: true, msg: "Your password Strength is " + passwordStrength(formData.password).value })

        }
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    // const handleCheck = () => {
    //     setCheck(!check)
    // }

    let valueReturned;
    const handleSignup = async (e) => {
        e.preventDefault();
        if (isSignup) {
            if (formData.email === "" || formData.phone_no === "" || formData.password === "" || formData.confirmPassword === "") {
                setTitle("Please Fill The Details")
                setopen(true)
            }
            else {
                if (check || !check) {

                    if (validator.isEmail(formData.email) && validator.isMobilePhone(formData.phone_no)) {
                        valueReturned = await dispatch(signup(formData, history, isUser))

                        if (valueReturned?.status && (valueReturned?.status === "invalid inputs" || valueReturned?.status === "Passwords do not match" || valueReturned?.status === "User Already Exists")) {

                            setTitle(valueReturned?.status)
                            setopen(true)
                            // localStorage.clear()
                        }
                        else {
                            setTitle("Please check Your Email for verification link")
                            setopen(true)
                            setIsSignup(!isSignup);
                        }
                    }
                    else {
                        if (!validator.isEmail(formData.email)) {
                            setTitle("Enter Valid Email")
                            setopen(true)
                        }
                        else {
                            setTitle("Enter Valid Mobile Number")
                            setopen(true)
                        }
                    }
                }
                else {
                    setTitle("Please Agree to Terms and Conditions")
                    setopen(true)
                }
            }

        }
        else {
            if (formData1.email === "" || formData1.password === "") {
               setTitle("Please Fill The Details")
               setopen(true)
            }
            else {
                setFormData1({ ...formData1, isUser: isUser })
                valueReturned = await dispatch(signin(formData1, history, isUser))
                console.log(isUser, "isUser")
                if (valueReturned?.status && (valueReturned?.status === "Password Incorrect" || valueReturned?.status === "User doesn't exists" || valueReturned?.status === "Type Incorrect")) {
                    setTitle(valueReturned?.status)
                    setopen(true)
                }
                else if(valueReturned?.status && valueReturned?.status === "Please Check your email for verification link"){
                    setTitle("User is Not Verified. Verification Link has been resent to your Email Id.")
                    setopen(true)
                }
            }
        }
        clear();
    }

    const handlegoogles = async () => {
        console.log(google, "signup")
        if (isSignup) {
            let temp5;
            console.log(google, "cred")
            await axios.post(`${process.env.REACT_APP_URL}/user/googlesignup`, google)
                .then(function (response) {
                    temp5 = response?.data;
                });
            console.log(temp5, "googlesignup")
            if (temp5?.status === "User Already Exists" || temp5?.status === "error") {
                setTitle(temp5?.status)
                setopen(true)
            }
            else {
                const temp3 = { data: temp5?.data }
                localStorage.setItem('profile', JSON.stringify({ ...temp3 }))
                if (google.isUser) {
                    history.push('/')
                }
                else {
                    history.push('/')
                }
            }
        }
        else {
            let temp5;
            await axios.post(`${process.env.REACT_APP_URL}/user/googlesignin`, google)
                .then(function (response) {
                    temp5 = response?.data;
                });
            console.log(temp5, "googlesignin")
            if (temp5?.status === "Type Incorrect" || temp5?.status === "plz verify email by visting the link" || temp5?.status === "User doesn't exists") {
                setTitle(temp5?.status)
                setopen(true)
            }
            else {
                const temp3 = { data: temp5?.data }
                localStorage.setItem('profile', JSON.stringify({ ...temp3 }))
                if (google.isUser) {
                    history.push('/')
                }
                else {
                    history.push('/home-vendor')
                }
            }

        }

    }

    const handle_signup_otp = (e) => {
        e.preventDefault();
        console.log("inside handle_signup_otp")
        if (OTP?.length == 6) {
            const code = OTP.toString();
            console.log(code, "code")
            window.confirmationResult.confirm(code).then((result) => {
                const user = result.user;
                console.log(temp1, "temp1");
                const temp3 = { data: temp1?.data }
                localStorage.setItem('profile', JSON.stringify({ ...temp3 }))
                console.log("User is verified")

                if (temp1?.data.isUser == 1) {
                    let data = temp1?.data.id;
                    console.log(data)
                    history.push('/')
                }
                else {
                    history.push('/home-vendor')
                }
                setIsSignup(false);
            }).catch((error) => {
                console.log(error, "error")
                setTitle("OOPs!Please try again");
                setopen(true)
            });
        }
    }

    const handlegoogle = async (e) => {
        e.preventDefault();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result.additionalUserInfo.profile.email)
                google = { email: result.additionalUserInfo.profile.email, isUser: isUser }
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                console.log(result, "c")
                handlegoogles();
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message
                var email = error.email;
                var credential = error.credential;
                setTitle("OOPs! Please try again")
                setopen(true)
            });

    }

    useEffect(() => {
        setFormData({ ...formData, isUser: isUser })
        setFormData1({ ...formData1, isUser: isUser })
    }, [isUser])

    const handleChange1 = (e) => {
        setFormData1({ ...formData1, [e.target.name]: e.target.value })
    }

    const handle_otp_number = (e) => {
        e.preventDefault();
        set_otp_num(e.target.value)
    }

    let temp2;
    const handlesendotp = async (e) => {
        
        e.preventDefault()
        console.log("here", OTP)
        await axios.get(`${process.env.REACT_APP_URL}/user/check_number/${otp_num}`)
            .then(function (response) {
                settemp1(response?.data)
                temp2 = response?.data
                console.log(temp2);
            }).catch((error) => {
                console.log(error)
            });      
        if (temp2?.status === "present") {
            ConfigureCaptcha()
            const phoneNumber = "+91" + otp_num
            console.log(phoneNumber)
            let appVerifier = window.recaptchaVerifier;
            firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
                .then((confirmationResult) => {
                    window.confirmationResult = confirmationResult;
                    setTitle ("OTP has been sent")
                    setOtpSent(true)
                    setopen(true)
                    setisOTP(true)
                }).catch((error) => {
                    //window.grecaptcha.reset(appVerifier)
                    //window.grecaptcha.reset(window.recaptchaVerifier)
                    setTitle("SMS not sent")
                    setopen(true)
                });
        }
        else {
            setTitle("User doesnt exists")
            setopen(true)
        }
        // setIsEmail(true)
    }

    const handle_otp_code = (e) => {
        e.preventDefault();
        set_otp({ ...otp, [e.target.name]: e.target.value });
    }

    const handleClickopen1 = () => {
        setopen(false);

    };
    const handle_otp_change_method = ()=>{
        setIsEmail(true)
        setisOTP(false)
    }
    const handle_otp_createaccount =() =>{
        setIsSignup(true)
        setisOTP(false)
        setIsEmail(true)
    }
    const handleforget = (e) => {
        e.preventDefault();
        setforgetemail(e.target.value)
        console.log(forgetemail, "handleforget")
    }

    const handlesomething = async (e) => {
        console.log(forgetemail, "handlesomething")
        e.preventDefault();

        let temp1;
        console.log(forgetemail)
        await axios.post(`${process.env.REACT_APP_URL}/user/resetpass/${forgetemail}`)
            .then(function (response) {
                temp1 = response?.data
            });
        if (temp1?.status === "error") {
            setTitle("enter a valid email")
            setopen(true)
        }
        else {
            setTitle("Please check your email for password reset link");
            setopen(true)
        }

    }

    const ConfigureCaptcha = () => {
        console.log("yaha", otp_num, typeof otp_num)
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                console.log("Recaptca varified")
            },
            defaultCountry: "IN"
        });

    }
    return (
        <div className="main-div"> 
            <div className="info-div">
                <img src={Logo} alt="Logo loading..." className="logo-img"></img>
                
                <div className="why-choose-us-login"> 
                    { section!=="register" && 
                    <div> 
                        <div className="why-choose-us-header">Why choose us?</div>

                        <div className="why-choose-us-description-line1 why-choose-us-description-line2">Hey user, can't find your product in the market?</div>
                        <div className="why-choose-us-description-line1">Surely you will find it here with the best best price and great quality.</div>
                        <div className="login-points-container">
                            <div className="why-choose-us-points1 why-choose-us-points2"><img src={CheckBox} className="tick"></img>Choose and buy multiple products on a single platform</div>
                            <div className="why-choose-us-points1"><img src={CheckBox} className="tick"></img>Services to choose from are as simple as possible</div>
                            <div className="why-choose-us-points1"><img src={CheckBox} className="tick"></img>Get products with best prices possible in the market</div>
                        </div>
                    </div> 
                    }

                    {section==="register" && 
                    <div>
                        <div className="why-choose-us-header">YOUR SUBSCRIPTION PLAN</div>

                        <div className="why-choose-us-description-line1 why-choose-us-description-line2">Before finishing your account, take a look at our</div>
                        <div className="why-choose-us-description-line1">subscription plan.</div>

                        <div className="current-plan">Current plan</div>

                        <div className="current-plan-details">
                            <div className="detail-price">FREE</div>
                            <div className="detail-number-of-items"><img src={CheckBox} className="tick"></img>2 item quotations</div>
                            <div className="rest-of-the-details"><img src={CheckBox} className="tick"></img>No discount</div>
                            <div className="rest-of-the-details"><img src={CheckBox} className="tick"></img>No extra item</div>
                        </div>

                        <div className="current-plan-details current-plan-details1">
                            <div className="rest-of-the-details plan-details">Continue with free plan</div>
                        </div>
                    </div>
                    }



                    <div className="socials-unresponsive">
                        <div className="follow-us">Follow us</div>
                        <div className="socials-instruction">We'd love to hear from you!</div>
                        <div className="links">
                            <a className="socials-link" href="https://www.facebook.com/ConstructionFlow" target="_blank" rel="noreferrer"><img src={Facebook} alt="facebook" /></a>
                            <a className="socials-link" href="https://twitter.com/ConstructionFlo/" target="_blank" rel="noreferrer"><img src={Twitter} alt="twitter" /></a>
                            <a className="socials-link" href="https://www.linkedin.com/company/constructionflow" target="_blank" rel="noreferrer"><img src={LinkedIn} alt="linkedin" /></a>
                            <a className="socials-link" href="https://www.instagram.com/constructionflow_" target="_blank" rel="noreferrer"><img src={Instagram} alt="instagram" /></a>
                        </div>
                        <div className="login-copyright">© Copyrights reserved</div>   
                    </div>
                    
                </div>
                
            </div>






            <div className="login-div" style={{height:section==="login"?"760px":section==="register"?"860px":""}}>
                {section==="login" &&
                    <div>
                        <div className="login-title">LOGIN TO YOUR ACCOUNT</div>
                        <div className="login-description">Login to your account now and get started!</div>

                        <form>
                            <div className="login-description textfield-description">Email address</div>
                            <input className="login-textfield" type="email" name="email" placeholder="Email ID" onChange={handleChange1} value={formData1.email}></input>
                            <div className="login-description textfield-description" style={{marginBottom:"2%"}}>Password</div>
                            <TextField onChange={handleChange1} name="password" placeholder="Password" type={showpassword ? "text" : "password"} style={{ backgroundColor:"#27292B", width:"93%", paddingLeft:"7%", borderRadius:"4px", fontSize:"16px", margin:"auto"}} className={classes.root} InputProps={{ className: classes.input, disableUnderline: true, endAdornment: <InputAdornment style={{ cursor: 'pointer' }} onClick={handleshow} >{showpassword ? <Visibility /> : <VisibilityOff />}</InputAdornment> }} value={formData1.password}></TextField>
                            <button className="login-button" onClick={handleSignup}>Login</button>
                        </form>
                        <h4 className="forgot" onClick={() => {setforgotPassword(true); setSection("forgot")}}>Forgot Password?</h4>
                        <div className="login-description">or continue using any of the following:</div>
                       
                        <div className="login-bottom-buttons">
                            <div onClick={() => {setIsEmail(false); setSection("mobile")}}   id="mob-button" className="mobile-button">
                                <img  src={phoneshake} alt="" className="mob-pic" ></img> 
                                <div className="button-span" >Mobile Number</div> 
                            </div>

                            <div onClick={handlegoogle} id="google-button" className="mobile-button">    
                                <img  alt="google" className="google-icon" src="data:image/png;base64,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"></img>
                                <div className="button-span">Google</div>
                            </div>
                        </div>
                        <div className="login-bottom-description">Don't have an account? <u className="login-bottom-underlined" onClick={()=>{setSection("register"); setIsSignup(true);}}>Register here</u></div>
                    </div>
                }







                {section==="register" &&
                <div>
                    <div className="login-title">Create account</div>
                    <div className="login-description">Fill in the following details of your account</div>

                    <form>
                        <div className="login-description textfield-description">Email address</div>
                        <input className="login-textfield" type="email" name="email" placeholder="Email ID" onChange={handleChange} value={formData.email}></input>
                        <div className="login-description textfield-description">Phone no</div>
                        <input className="login-textfield" type="number" name="phone_no" placeholder="Phone no" onChange={handleChange} value={formData.phone_no}></input>
                        <div className="login-description textfield-description" style={{marginBottom:"2%"}}>Password</div>
                        <TextField onChange={handleChange} name="password" placeholder="Password" type={showpassword ? "text" : "password"} style={{ backgroundColor:"#27292B", width:"93%", paddingLeft:"7%", borderRadius:"4px", fontSize:"16px", margin:"auto"}} className={classes.root} InputProps={{ className: classes.input, disableUnderline: true, endAdornment: <InputAdornment style={{ cursor: 'pointer' }} onClick={handleshow} >{showpassword ? <Visibility /> : <VisibilityOff />}</InputAdornment> }} value={formData.password}></TextField>
                        <div className="login-description textfield-description" style={{marginBottom:"2%"}}>Password</div>
                        <TextField onChange={handleChange} name="confirmPassword" placeholder="Confirm Password" type={showpassword ? "text" : "password"} style={{ backgroundColor:"#27292B", width:"93%", paddingLeft:"7%", borderRadius:"4px", fontSize:"16px", margin:"auto"}} className={classes.root} InputProps={{ className: classes.input, disableUnderline: true, endAdornment: <InputAdornment style={{ cursor: 'pointer' }} onClick={handleshow} >{showpassword ? <Visibility /> : <VisibilityOff />}</InputAdornment> }} value={formData.confirmPassword}></TextField>
                        <button className="login-button" onClick={handleSignup}>Create account</button>
                    </form>


                    <div className="login-bottom-description">Already have an account? <u className="login-bottom-underlined" onClick={()=>{setSection("login"); setIsSignup(false); setIsEmail(true)}}>Login here</u></div>
                </div>
                }







                {(section==="mobile" && otpSent===false) &&
                <div>
                    <div className="login-title">LOGIN TO YOUR ACCOUNT</div>
                    <div className="login-description">Login to your account now and get started!</div>

                    <form>
                        <div className="login-description textfield-description">Enter Phone no.</div>
                        <input className="login-textfield" placeholder="Mobile No" type="number" onChange={handle_otp_number} value={otp_num}></input>
                        <button className="login-button" id='sign-in-button' onClick={handlesendotp}>Send OTP</button>
                    </form>

                    <div className="login-description">or continue using any of the following:</div>
                   
                    <div className="login-bottom-buttons">
                        <div onClick={() => {setIsEmail(true); setSection("login")}}  id="mail-button" className="mobile-button"> 
                            <img src={mailB} alt="" className="mailB" />                               
                            <div className="button-span" >Email ID</div>
                        </div>

                        <div onClick={handlegoogle} id="google-button" className="mobile-button">    
                            <img  alt="google" className="google-icon" src="data:image/png;base64,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"></img>
                            <div className="button-span">Google</div>
                        </div>
                    </div>

                    <div className="login-bottom-description">Don't have an account? <u className="login-bottom-underlined" onClick={()=>{setSection("register"); setIsSignup(true); setIsEmail(true);}}>Register here</u></div>
                </div>
                }






                {(section==="mobile" && otpSent===true) &&
                <div>
                    <div style={{display:"flex", justifyContent:"space-around", marginTop:"40px"}}><img src={otpbg} alt="" className="otpbg"/></div>
                    <div style={{display:"flex", justifyContent:"space-around", marginTop:"-100px", marginBottom:"15%"}}><img src={mailsheild} alt="" className="mailsheild"/></div>
                    <div className="login-title">Check your messages</div>
                    <div className="login-description">We have sent an OTP verification to <span style={{color:"white"}}>+91 {otp_num}</span>.</div>
                    <div className="login-description">Please check your messages.</div>
                    <form>
                        <div className="login-description textfield-description">Enter code</div>
                        <input className="login-textfield" placeholder="OTP Code" type="number" onChange={(e) => setOTP(e.target.value)} value={OTP}></input>
                        <button className="login-button" onClick={handle_signup_otp}>Verify & Login</button>
                    </form>
                    <div style={{textAlign:"center", fontWeight:"600", marginTop:"10%", cursor:"pointer"}} onClick={()=>{setSection("login"); setIsEmail(true)}}>Change Login method</div>
                    <div className="login-bottom-description">Don't have an account? <u className="login-bottom-underlined" onClick={()=>{setSection("register"); setIsSignup(true); setIsEmail(true);}}>Register here</u></div>
                </div>
                }



                {section==="forgot" &&
                <div>
                    <div className="login-title">Please enter email</div>
                    <form>
                        <div className="login-description textfield-description">Enter email</div>
                        <input className="login-textfield" placeholder="Email ID" type="email" name="email" value={forgetemail} onChange={handleforget}></input>
                        <button className="login-button" onClick={handlesomething}>Forgot password</button>
                    </form>
                    <div style={{textAlign:"center", fontWeight:"600", marginTop:"10%", cursor:"pointer"}} onClick={()=>{setSection("login"); setIsEmail(true)}}>Change Login method</div>
                    <div className="login-bottom-description">Don't have an account? <u className="login-bottom-underlined" onClick={()=>{setSection("register"); setIsSignup(true); setIsEmail(true);}}>Register here</u></div>
                </div>
                }
            </div>

            
                <div className="socials-responsive">
                    <div className="follow-us">Follow us</div>
                    <div className="socials-instruction">We'd love to hear from you!</div>

                    <div className="login-copyright">© Copyrights reserved</div> 
                    <div className="links">
                        <a className="socials-link" href="https://www.facebook.com/ConstructionFlow" target="_blank" rel="noreferrer"><img src={Facebook} alt="facebook" /></a>
                        <a className="socials-link" href="https://twitter.com/ConstructionFlo/" target="_blank" rel="noreferrer"><img src={Twitter} alt="twitter" /></a>
                        <a className="socials-link" href="https://www.linkedin.com/company/constructionflow" target="_blank" rel="noreferrer"><img src={LinkedIn} alt="linkedin" /></a>
                        <a className="socials-link" href="https://www.instagram.com/constructionflow_" target="_blank" rel="noreferrer"><img src={Instagram} alt="instagram" /></a>
                    </div> 
                </div>
            
                

            <PopupSaved title={title} handleClickOpen={handleClickopen1} open={open} setOpen={setopen} />
        </div>
    )
}

export default Login

