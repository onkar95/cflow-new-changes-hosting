import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
const ProfilePercent = ({ height, siteAddress, setProfileComplete, formData, currentSection }) => {
    // console.log(filled,"filled")
    // const val = filled.address + filled.company + filled.personal
    let temp = 0;
    // console.log(formData.site)
    console.log(siteAddress)
    useEffect(() => {
        if (formData != "") {

            if (formData.first_name !== "") {
                temp++;
            }
            if (formData.phone !== "") {
                temp++;
            }
            if (formData.city !== "") {
                temp++;
            }
            if (formData.pin !== "") {
                temp++;
            }
            if (formData.email !== "") {
                temp++;
            }
            if (formData.wpp !== "") {
                temp++;
            }
            if (formData.state !== "") {
                temp++;
            }
            if (formData.company_detail_name !== "") {
                temp++;
            }
            if (formData.phone !== "") {
                temp++;
            }
            if (formData.company_name !== "") {
                temp++;
            }
            if (formData.company_title !== "") {
                temp++;
            }
            if (formData.email !== "") {
                temp++;
            }
            if (formData.wpp !== "") {
                temp++;
            }
            if (siteAddress !== 1) {
                temp += 7;
            }
        }
        console.log(temp)
    }, [formData, currentSection, siteAddress])
    const [percent, setPercent] = useState();

    const [chartOptions, setChartOptions] = useState({
        series: [temp * 5],
        options: {
            chart: {
                height: 270,
                type: "radialBar",
                fontFamily: "Open Sans, Arial, sans-serif",
                foreColor: "#ffb600",
                selection: {
                    enabled: false,
                },
                dropShadow: {
                    enabled: true,
                    blur: 5,
                    color: "#ffb600",
                    opacity: 0.35,
                },
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: "65%",
                        background: "transparent",
                    },
                    dataLabels: {
                        name: {
                            show: false,
                        },
                        value: {
                            show: true,
                            fontSize: "16px",
                            fontFamily: "Open Sans, Arial, sans-serif",
                            fontWeight: "bold",
                            colors: "#ffb600",
                            offsetY: 8,
                        },
                    },
                    track: {
                        show: true,
                        background: "#2d2d2d",
                    },
                },
            },
            stroke: {
                lineCap: "round",
            },
            fill: {
                colors: ["#ffb600"],
            },
            labels: [percent + "%"],
            states: {
                hover: {
                    filter: {
                        type: "none",
                    },
                },
                active: {
                    filter: {
                        type: "none",
                    },
                },
            },
        },
    });


    useEffect(() => {
        console.log(temp);
        setProfileComplete(temp * 5);
        setPercent(temp ? temp * 5 : 0)
        // console.log(setPercent())
        // console.log(percent)
        setChartOptions({ ...chartOptions, series: [temp * 5] })
    }, [formData, currentSection, siteAddress])
    console.log(setProfileComplete);
    return (
        <>
            {window.innerWidth > 950 ?
                <Chart
                    options={chartOptions.options}
                    series={chartOptions.series}
                    type='radialBar'
                    height={270}
                />
                :
                <Chart
                    options={chartOptions.options}
                    series={chartOptions.series}
                    type='radialBar'
                    height={height}
                />
            }
        </>
    );
};

export default ProfilePercent;
