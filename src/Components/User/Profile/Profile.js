import React, { useEffect, useState } from "react";
import { Row, Column } from "../Styled/Styled";

import ProfileNav from "./sections/ProfileNav";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import PersonalDetails from "./sections/PersonalDetails";
import CompanyDetails from "./sections/CompanyDetails";
import AddressDetails from "./sections/AddressDetails";
import Feedback from "./sections/Feedback";
import AboutUs from "./sections/AboutUs";
import Help from "./sections/Help";
import axios from "axios"
import AddressBook from "./sections/AddressBook";
import EditAddress from "./sections/EditAddress";
import AddNewAddress from "./sections/AddNewAddress";
import PopupSaved from "../../Popup/popupsaved/PopupSaved"
import "./sections/Profile.css"
import ProfileNavMobile from "./sections/ProfileNavMobile";
import personalDetialsYellow from "../../../Images/newProfileYellow/Personal Details.png";
import companyDetailsYellow from "../../../Images/newProfileYellow/Company details.png";
import companyAddressYellow from "../../../Images/newProfileYellow/Company address.png";
import addressBookYellow from "../../../Images/newProfileYellow/Site address book.png";
import FeedbackYellow from "../../../Images/newProfileYellow/Feedback.png";
import helpYellow from "../../../Images/newProfileYellow/Help.png";
import personalDetials from "../../../Images/newProfile/Personal Details.png";
import companyDetails from "../../../Images/newProfile/Company details.png";
import companyAddress from "../../../Images/newProfile/Compay address.png";
import addressBook from "../../../Images/newProfile/Site address book.png";
import help from "../../../Images/newProfile/Help small.png";
import feedback from "../../../Images/newProfile/Feedback.png";
// import personalDetials from "../../../Images/fe";
import logutIcon from "../../../Images/newProfileYellow/Logout.png"
import SideMenu from "./sections/SideMenu";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Profile = (
    { theme, toabout, setToabout, formData, setFormData, getUser, site, pitchedRequests, getSite, setSite, currentSection, setCurrentSection }) => {

    const dispatch = useDispatch()
    const history = useHistory()

    const profilSections = [personalDetials, companyAddress, companyDetails, addressBook, feedback, help]
    const profilSectionsYellow = [personalDetialsYellow, companyAddressYellow, companyDetailsYellow, addressBookYellow, FeedbackYellow, helpYellow]
    const [siteNo, setSiteNo] = useState(0)
    const [siteAddress, setSiteAddress] = useState(0)
    const [filled, setFilled] = useState({ address: 0, company: 0, personal: 0 })
    const [open, setOpen] = React.useState(false);
    const [feedbackSection, setFeedbackSection] = React.useState(false);
    const [profileComplete, setProfileComplete] = useState(0);
    const [editable, seteditable] = useState(true);

    console.log(profileComplete);
    useEffect(() => {
        if (site != "") {
            setSiteAddress(7)
        } else {
            setSiteAddress(1)
        }
    }, [site,currentSection,setSite])
    console.log(siteAddress);
    console.log(site);
    const handleClickOpen = () => {
        setOpen(true);
    };
    console.log(theme);
    useEffect(() => {
        if (toabout) {
            setToabout(false)
        }
    }, [toabout])

    const handleChange = (i) => {
        setCurrentSection(i);
    };
    const handleLogout = () => {
        handleChange(6)
        dispatch({ type: "LOGOUT" })
        history.push("/")
    }
    const handleLogoutConfirmation = () => {
        setOpen(true)
    }
    console.log(filled);
    return (
        <>
            <div className='breadcrumbsuser'>
                <h3 style={{ margin: 0 }}>
                    Home / {" "}
                    <span style={{ color: "#FFB600" }}>Profile</span>
                </h3>
            </div>
            {window.innerWidth > 600 ?
                <ProfileNav siteAddress={siteAddress} setProfileComplete={setProfileComplete} profileComplete={profileComplete} pitchedRequests={pitchedRequests} editable={editable} seteditable={seteditable} theme={theme} formData={formData} currentSection={currentSection} setCurrentSection={setCurrentSection} feedback={feedback} FeedbackYellow={FeedbackYellow} function={handleChange} filled={filled} />
                :
                <ProfileNavMobile siteAddress={siteAddress} setProfileComplete={setProfileComplete} profileComplete={profileComplete} pitchedRequests={pitchedRequests} editable={editable} seteditable={seteditable} theme={theme} formData={formData} currentSection={currentSection} setCurrentSection={setCurrentSection} feedback={feedback} FeedbackYellow={FeedbackYellow} function={handleChange} filled={filled} />
            }
            <div className="profile_sections" style={theme === true ? { backgroundColor: "#f6f5f2", color: "black" } : { Color: "#2d2d2d" }}>

                {currentSection === 3 ?

                    <div className="backArrow" >
                        <span>
                            <ArrowBackIosIcon />
                        </span>
                        <h3 onClick={() => setCurrentSection(0)}>back</h3>
                    </div>
                    : <SideMenu editable={editable} theme={theme} formData={formData} currentSection={currentSection} setCurrentSection={setCurrentSection} profilSections={profilSections} profilSectionsYellow={profilSectionsYellow} />

                }
                <Row>
                    <Column className="main_content"  >
                        {currentSection === 0 && <PersonalDetails editable={editable} seteditable={seteditable} theme={theme} formData={formData} setFormData={setFormData} getUser={getUser} filled={filled} setFilled={setFilled} handleClickOpen={handleClickOpen} />}
                        {currentSection === 1 && <CompanyDetails editable={editable} seteditable={seteditable} theme={theme} formData={formData} setFormData={setFormData} getUser={getUser} filled={filled} setFilled={setFilled} handleClickOpen={handleClickOpen} />}
                        {/* {currentSection === 2 && <AddressDetails theme={theme} formData={formData} setFormData={setFormData} getUser={getUser} filled={filled} setFilled={setFilled} handleClickOpen={handleClickOpen} />} */}
                        {currentSection === 3 && <Feedback theme={theme} formData={formData} setFormData={setFormData} getUser={getUser} handleClickOpen={handleClickOpen} />}
                        {currentSection === 4 && <AboutUs />}
                        {currentSection === 5 && <Help theme={theme} />}
                        {currentSection === 7 && <AddressBook filled={filled} setFilled={setFilled} theme={theme} setCurrentSection={setCurrentSection} site={site} setSiteNo={setSiteNo} site={site} siteNo={siteNo} setSite={setSite} getSite={getSite} handleClickOpen={handleClickOpen} />}
                        {currentSection === 8 && <EditAddress editable={editable} seteditable={seteditable} theme={theme} setCurrentSection={setCurrentSection} site={site} siteNo={siteNo} setSite={setSite} getSite={getSite} handleClickOpen={handleClickOpen} />}
                        {currentSection === 9 && <AddNewAddress filled={filled} setFilled={setFilled} theme={theme} setCurrentSection={setCurrentSection} formData={formData} setFormData={setFormData} getUser={getUser} getSite={getSite} handleClickOpen={handleClickOpen} />}
                    </Column>
                    <PopupSaved title="Saved" handleClickOpen={handleClickOpen} open={open} setOpen={setOpen} />

                </Row>
            </div >

        </>
    );
};

export default Profile;
