import React from "react";
import star from "../../../Images/star.svg";
import "./Subscription.css";
import tick from "../../../Images/tick.svg";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Subscription = () => {
  return (
    <div className="subscription_main">
      <div className="subscription_heading">
        <h3>CHOOSE SUBSCRIPTION PLAN</h3>
        <p>
          Browse and choose the right plan for your construction needs. All
          plans comes with
          <span>&nbsp; free 2 items.</span>
        </p>
      </div>

      <div className="subscription_plans">
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto ">
            <div className="plans_box flex -m-4" id="scroll_x">

              {/* First */}
              <div className="p-4 xl:w-1/4 md:w-1/2 w-full mx-4">
                <div className="h-full p-6 rounded-lg text-center flex flex-col relative overflow-hidden border-2 border-gray-900 rounded-lg">
                  <div className="flex flex-col">
                    <div className="price_heading -ml-5 mt-4 ">
                      <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                        ₹
                      </h2>
                      <h1 className="text-5xl text-gray-900 pb-4 leading-none">
                        FREE
                      </h1>
                    </div>
                    <div className="text-white -ml-5">
                      <p>ONETIME</p>
                    </div>
                  </div>
                  <hr className="mt-14 -mb-10 bg-gray-900 h-1" />
                  <div className="mt-14 mb-6 text-gray-300 -ml-3">
                    <p>Plan includes:</p>
                  </div>

                  <p className="flex items-center my-2 text-yellow-500 text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-1 inline-flex items-center justify-center  text-white rounded-full flex-shrink-0">
                      <img className="mr-2" src={tick} alt="tick" />
                    </span>
                    3 items
                  </p>
                  <p className="flex items-center my-2 text-gray-400 mb-2">
                    <span className="w-1 h-1 mr-4  inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.2"
                        className="w-1 h-1"
                        viewBox="0 0 16 16"
                      ></svg>
                    </span>
                    No discounts
                  </p>
                  <p className="flex items-center my-2 text-gray-400 mb-6">
                    <span className="w-1 h-1 mr-4  inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"></span>
                    No extra items
                  </p>
                  <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                    Choose plan
                  </button>
                </div>
              </div>

              {/* Two */}
              <div className="p-4 xl:w-1/4 md:w-1/2 w-full mx-4">
                {/* border-2 border-gray-300 */}
                <div className="h-full p-6 rounded-lg  flex flex-col relative overflow-hidden border-2 border-gray-900 rounded-lg">
                  <div className="flex flex-col">
                    <div className="price_heading text-center -ml-5 mt-4">
                      <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                        ₹
                      </h2>
                      <h1 className="text-5xl text-gray-900 pb-4 leading-none">
                        6,000
                      </h1>
                    </div>
                    <div className="text-white text-center -ml-5">
                      <p>1 Month</p>
                    </div>
                  </div>
                  <hr className="mt-14 -mb-10 bg-gray-900 h-1" />

                  <div className="mt-14 mb-6 text-gray-300 text-center -ml-3">
                    <p>Plan includes:</p>
                  </div>

                  <p className="flex items-center my-2 text-yellow-500 text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-1 inline-flex items-center justify-center  text-white rounded-full flex-shrink-0">
                      <img className="mr-2" src={tick} alt="tick" />
                    </span>
                    3 items
                  </p>
                  <p className="flex items-center my-2 text-gray-400 mb-2">
                    <span className="w-1 h-1 mr-4 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.2"
                        className="w-1 h-1"
                        viewBox="0 0 16 16"
                      ></svg>
                    </span>
                    No discounts
                  </p>
                  <p className="flex items-center my-2 text-gray-400 mb-6">
                    <span className="w-1 h-1 mr-4  inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"></span>
                    No extra items
                  </p>
                  <button className="flex items-center mt-10 text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                    Choose plan
                  </button>
                </div>
              </div>
             
              {/* Three */}
              <div className="p-4 xl:w-1/4 md:w-1/2 w-full mx-4">
                {/* border-2 border-gray-300 */}
                <div className="h-full p-6 rounded-lg  flex flex-col relative overflow-hidden border-2 border-gray-900 rounded-lg">
                  <div className="flex flex-col">
                    <div className="price_heading text-center -ml-5 mt-4">
                      <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                        ₹
                      </h2>
                      <h1 className="text-5xl text-gray-900 pb-1 leading-none">
                        15,000
                      </h1>
                    </div>
                    <div className="text-center text-grey-300 -ml-5 ">
                      <p>
                        ₹ <span className="line-through">18,000</span>
                      </p>
                    </div>
                    <div className="text-center text-white mt-3 -ml-5">
                      <p>3 Month</p>
                    </div>
                  </div>
                  <hr className="mt-8 -mb-2 bg-gray-900 h-1" />

                  <div className="my-6 text-gray-300 text-center -ml-3">
                    <p>Plan includes:</p>
                  </div>

                  <p className="flex items-center my-2 text-yellow-500 text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-1 inline-flex items-center justify-center  text-white rounded-full flex-shrink-0">
                      <img className="mr-2" src={tick} alt="tick" />
                    </span>
                    9 items
                  </p>
                  <p className="flex items-center my-2 text-yellow-500 text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-1 inline-flex items-center justify-center  text-white rounded-full flex-shrink-0">
                      <img className="mr-2" src={tick} alt="tick" />
                    </span>
                    ₹ 3,000
                  </p>
                  <p className="ml-5 text-white">
                    Total discount:
                    <span className="text-yellow-500 ml-2">₹ 6,000</span>
                  </p>

                  <p className="flex items-center my-2 text-gray-400 mb-6">
                    <span className="w-1 h-1 mr-4  inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0"></span>
                    No extra items
                  </p>
                  <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                    Choose plan
                  </button>
                </div>
              </div>
        
              {/* Four */}
              <div className="p-4 xl:w-1/4 md:w-1/2 w-full mx-4">
                <div className="h-full p-6 rounded-lg border-2 border-yellow-600 flex flex-col relative overflow-hidden border-2 border-gray-900 rounded-lg">
                  <div className="flex flex-col">
                    <div className="most-price text-centerbg-yellow-500 text-yellow-500 flex text-sm mb-2 -ml-6">
                      <img className="mr-3" src={star} alt="star" />
                      <span>MOST POPULAR</span>
                    </div>
                    <div className="price_heading text-center -ml-6">
                      <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                        ₹
                      </h2>
                      <h1 className="text-5xl text-gray-900 pb-1 leading-none">
                        30,000
                      </h1>
                    </div>
                    <div className="text-center text-grey-400 -ml-6">
                      <p>
                        ₹ <span className="line-through">36,000</span>
                      </p>
                    </div>
                    <div className="text-center text-white mt-3 -ml-6">
                      <p>6 Month</p>
                    </div>
                  </div>
                  <hr className="mt-8 -mb-2 bg-gray-900 h-1" />

                  <div className="my-6 text-gray-300 text-center -ml-4">
                    <p>Plan includes:</p>
                  </div>

                  <p className="flex items-center my-2 text-yellow-500 text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-1 inline-flex items-center justify-center  text-white rounded-full flex-shrink-0">
                      <img className="mr-2" src={tick} alt="tick" />
                    </span>
                    18 items
                  </p>
                  <p className="flex items-center my-2 text-yellow-500 text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-1 inline-flex items-center justify-center  text-white rounded-full flex-shrink-0">
                      <img className="mr-2" src={tick} alt="tick" />
                    </span>
                    ₹ 6,000
                  </p>
                  <p className="ml-5 text-white">
                    Total discount:
                    <span className="text-yellow-500 ml-2">₹ 12,000</span>
                  </p>

                  <p className="flex items-center my-2 text-yellow-500 text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-1 inline-flex items-center justify-center  text-white rounded-full flex-shrink-0">
                      <img className="mr-2" src={tick} alt="tick" />
                    </span>
                    +3 extra items
                  </p>
                  <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                    Choose plan
                  </button>
                </div>
              </div>
       
              {/* Five */}
              <div className="p-4 xl:w-1/4 md:w-1/2 w-full mx-4">
                {/* // border-2 border-gray-300 */}
                <div className="h-full p-6 rounded-lg  flex flex-col relative overflow-hidden border-2 border-gray-900 rounded-lg">
                  <div className="flex flex-col">
                    <div className="price_heading text-center mt-4 -ml-5">
                      <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                        ₹
                      </h2>
                      <h1 className="text-5xl text-gray-900 pb-1 leading-none">
                        36,000
                      </h1>
                    </div>
                    <div className="text-center text-grey-300 -ml-5">
                      <p>
                        ₹ <span className="line-through">72,000</span>
                      </p>
                    </div>
                    <div className="text-center text-white mt-3 -ml-5">
                      <p>6 Month</p>
                    </div>
                  </div>
                  <hr className="mt-8 -mb-2 bg-gray-900 h-1" />

                  <div className="my-6 text-gray-300 text-center -ml-3">
                    <p>Plan includes:</p>
                  </div>

                  <p className="flex items-center my-2 text-yellow-500 text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-1 inline-flex items-center justify-center  text-white rounded-full flex-shrink-0">
                      <img className="mr-2" src={tick} alt="tick" />
                    </span>
                    9 items
                  </p>
                  <p className="flex items-center my-2 text-yellow-500 text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-1 inline-flex items-center justify-center  text-white rounded-full flex-shrink-0">
                      <img className="mr-2" src={tick} alt="tick" />
                    </span>
                    ₹ 3,000
                  </p>
                  <p className="ml-5 text-white">
                    Total discount:
                    <span className="text-yellow-500 ml-2">₹ 6,000</span>
                  </p>

                  <p className="flex items-center my-2 text-yellow-500 text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-1 inline-flex items-center justify-center  text-white rounded-full flex-shrink-0">
                      <img className="mr-2" src={tick} alt="tick" />
                    </span>
                    +6 extra items
                  </p>
                  <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                    Choose plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="FAQ_title">
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <p>
          Still have questions? <span>Contact us here</span>
        </p>
      </div>

      <div className="FAQ_data">
        <div>
          <Accordion
            style={{
              background: "#191B1E",
              color: "white",
              width: "40vw",
              margin: "15px 0",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography> What payment methods do you accept?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                "It's all good. Man, this thing is getting better and better as
                I learn more about it. I'd be lost without It's. Thanks it!"
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            style={{
              background: "#191B1E",
              color: "white",
              width: "40vw",
              margin: "15px 0",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                {" "}
                If you didn't need sleep, what would you do?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                "It's all good. Man, this thing is getting better and better as
                I learn more about it. I'd be lost without It's. Thanks it!"
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            style={{
              background: "#191B1E",
              color: "white",
              width: "40vw",
              margin: "15px 0",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>What do you do as excerise?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                "It's all good. Man, this thing is getting better and better as
                I learn more about it. I'd be lost without It's. Thanks it!"
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <div>
          <Accordion
            style={{
              background: "#191B1E",
              color: "white",
              width: "40vw",
              margin: "15px 0",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography> What payment methods do you accept?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                "It's all good. Man, this thing is getting better and better as
                I learn more about it. I'd be lost without It's. Thanks it!"
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            style={{
              background: "#191B1E",
              color: "white",
              width: "40vw",
              margin: "15px 0",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                {" "}
                If you didn't need sleep, what would you do?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                "It's all good. Man, this thing is getting better and better as
                I learn more about it. I'd be lost without It's. Thanks it!"
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            style={{
              background: "#191B1E",
              color: "white",
              width: "40vw",
              margin: "15px 0",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>What do you do as excerise?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                "It's all good. Man, this thing is getting better and better as
                I learn more about it. I'd be lost without It's. Thanks it!"
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
