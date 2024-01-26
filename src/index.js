// MyComponent.js
import ReactDOM from 'react-dom';

"use client"

import React, { useEffect, useState,useId } from 'react'
// ,,,c13e4a,c85d42,9251ab,7456b7

import Select from 'react-select';
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import 'react-tooltip/dist/react-tooltip.css'
import './output.css';
import { Tooltip } from 'react-tooltip'
import { AiOutlineInfoCircle, AiOutlineShareAlt } from 'react-icons/ai';
import axios from 'axios';

const theme = theme => ({
    ...theme,
    colors: {
        ...theme.colors,
        primary25: "#f3f3f3",
        //   primary: "pink",

        // All possible overrides
        primary: '#2684FF',
        // primary75: '#4C9AFF',
        // primary50: '#B2D4FF',
        // primary25: '#DEEBFF',

        // danger: '#DE350B',
        // dangerLight: '#FFBDAD',

        // neutral0: 'hsl(0, 0%, 100%)',
        // neutral5: 'hsl(0, 0%, 95%)',
        // neutral10: 'hsl(0, 0%, 90%)',
        // neutral20: 'hsl(0, 0%, 80%)',
        // neutral30: 'hsl(0, 0%, 70%)',
        // neutral40: 'hsl(0, 0%, 60%)',
        // neutral50: 'hsl(0, 0%, 50%)',
        // neutral60: 'hsl(0, 0%, 40%)',
        // neutral70: 'hsl(0, 0%, 30%)',
        // neutral80: 'hsl(0, 0%, 20%)',
        // neutral90: 'hsl(0, 0%, 10%)',
    },
    // Other options you can use
    borderRadius: 4,
    baseUnit: 4,
    controlHeight: 38,
    // menuGutter: baseUnit * 2
});
export function MainComponent() {
    const [data, setData] = useState()
    const [select, setSelect] = useState({
        monthToDate: { value: 0, label: 'Month to date' },
        country: { value: "IN", label: "India" },
        fileType: null,
        applicationType: null
    });

    useEffect(() => {
        axios.get(`https://api.nextmigrant.com/order-detail/get-data?country=${select?.country?.value}&fileType=null&monthToDate=null&applicationType=null&order_details=null`,
        {headers:{ 'Authorization': `Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIyIiwiaWF0IjoxNzA0NzM0NzMzfQ.U8LWOf-w9glmVqlkJbzU3YZ6w_oI5LQpaPgnLgqly1q1JUzYGBoJXSIqpwVUwSZS`} })
            .then(res => setData(res.data))
    }, [select])

    return (
        <div className=''>
            <div className='flex items-center px-8 mt-10'>
                <div className='hidden lg:flex  gap-4'>
                    <Select
                        id={useId()}
                        isSearchable={true}
                        theme={theme}
                        name='monthToDate'
                        options={[
                            // Last 7 days, Last 4 weeks, Last 3 months, Last 12 months, Month to date, Year to date, All time
                            { value: 0, label: 'Month to date' },
                        ]}
                        required={true}
                        value={select?.monthToDate}
                        onChange={(e) => setSelect(pre => ({ ...pre, monthToDate: e }))}
                    />
                    <Select
                        id={useId()}
                        isSearchable={true}
                        theme={theme}
                        name='country'
                        className='w-[150px]'
                        options={[
                            { value: "IN", label: "India" },
                            { value: "NG", label: "Nigeria" },
                            { value: "PH", label: "Philippines" },
                            { value: "PK", label: "Pakistan" },
                            { value: "BD", label: "Bangladesh" },
                            { value: "BG", label: "Bulgaria" },
                            { value: "US", label: "United States" }
                        ]}
                        required={true}
                        value={select?.country}
                        onChange={(e) => setSelect(pre => ({ ...pre, country: e }))}
                    />
                    <Select
                        id={useId()}
                        isSearchable={true}
                        theme={theme}
                        name='fileType'
                        options={[
                            { value: "GCMS notes", label: 'GCMS notes' },
                            { value: "CBSA notes", label: 'CBSA notes' },
                        ]}
                        required={true}
                        value={select?.fileType}
                        onChange={(e) => setSelect(pre => ({ ...pre, fileType: e }))}
                    />
                    {/* <Select
                    id={useId()}
                    isSearchable={true}
                    theme={theme}
                    className='w-[180px] whitespace-nowrap'
                    name='applicationType'
                    options={[
                        {"value":"Study Permit","label":"Study Permit"},
                        {"value":"Visitor (Guest) Visa","label":"Visitor (Guest) Visa"},
                        {"value":"Work Permit","label":"Work Permit"},
                        {"value":"Permanent Residence","label":"Permanent Residence"},
                        {"value":"Family Sponsorship","label":"Family Sponsorship"},
                        {"value":null,"label":"N/A"}
                    ]}
                    required={true}
                    value={select?.applicationType}
                    onChange={(e) => setSelect(pre => ({ ...pre, applicationType: e }))}
                /> */}
                </div>

                <div className='flex flex-col lg:flex-row lg:items-center items-end gap-2 lg:gap-4 ml-auto'>
                    <div className="text-base font-medium text-[#13231A99]" >
                        Last updated: 25 minuets ago <span className="text-[#1A21FF]" > Refresh data  </span>
                    </div>

                    <div className={`flex items-center border rounded-lg px-4 py-2 cursor-pointer bg-[#1A21FF] text-white`}
                        onClick={() => null}>
                        <span className="text-base font-medium " >
                            Share
                        </span>
                        <AiOutlineShareAlt className='ml-2' size={20} color={'#ffffff'} />
                    </div>
                </div>
            </div>

            <hr className='my-3 mx-8 hidden lg:block' />

            <div className='flex flex-col lg:flex-row gap-8 mx-4 my-8 lg:m-8'>
                <div className='w-full lg:basis-1/2 flex flex-col items-center justify-center'>
                    <div className='text-[70px] font-bold text-[#13231A]'>
                        {data?.["Work Permit Total Avg"]} Days
                    </div>
                    <div className='text-lg lg:text-xl font-bold text-[#81724D]'>
                        Average processing time
                    </div>
                    <div className='text-sm lg:text-lg text-center font-medium text-[#81724D] p-3 lg:p-5 rounded-lg border mx-0 lg:mx-20 mt-4'>
                        Based on data from {data?.["Work Permit Total Avg"]} applications processed over a period of three month
                    </div>
                </div>
                <LineGraph
                    title='Average processing time'
                    desc='Average processing time for most applications based on the selected period.'
                    data={Object.entries(data?.["Study Permit"] ?? {})}
                    lineColor='#565abf' />
            </div>

            <hr className='my-3 mx-8 hidden lg:block' />

            <div className='flex flex-col lg:flex-row gap-8 mx-4 my-8 lg:m-8'>
                <LineGraph
                    title='Study permit'
                    desc='Average processing time for most study permit applications during the selected period.'
                    data={Object.entries(data?.["Study Permit"] ?? {})}
                    lineColor='#207bb7' />

                <PieChartGraph
                    title='By application types'
                    data={[
                        {
                            name: "Family Sponsorship Total Avg",
                            y: data?.["Family Sponsorship Total Avg"],
                            color: "#565abf",
                        },
                        {
                            name: "Permanent Residence Total Avg",
                            y: data?.["Permanent Residence Total Avg"],
                            color: "#207bb7",
                        },
                        {
                            name: "Study Permit Total Avg",
                            y: data?.["Study Permit Total Avg"],
                            color: "#159671",
                        },
                        {
                            name: "Visitor (Guest) Visa Total Avg",
                            y: data?.["Visitor (Guest) Visa Total Avg"],
                            color: "#ce7c3a"
                        }
                    ]} />
            </div>

            <hr className='my-3 mx-8 hidden lg:block' />

            <div className='flex flex-col lg:flex-row gap-8 mx-4 my-8 lg:m-8'>
                <LineGraph
                    title='Permanent residence'
                    desc='Average processing time for most permanent residence applications during the selected period.'
                    data={Object.entries(data?.["Permanent Residence"] ?? {})}
                    lineColor='#159671' />

                <LineGraph
                    title='Work permit'
                    desc='Average processing time for most work permit applications during the selected period.'
                    data={Object.entries(data?.["Work Permit"] ?? {})}
                    lineColor='#ce7c3a' />
            </div>

            <div className='flex flex-col lg:flex-row gap-8 mx-4 my-8 lg:m-8'>
                <div className='bg-[#00000008] hidden lg:flex basis-1/5  flex-col gap-3 p-4 rounded-md'>
                    {[
                        { value: "IN", label: "India" },
                        { value: "NG", label: "Nigeria" },
                        { value: "PH", label: "Philippines" },
                        { value: "PK", label: "Pakistan" },
                        { value: "BD", label: "Bangladesh" },
                        { value: "BG", label: "Bulgaria" },
                        { value: "US", label: "United States" }
                    ]?.map((ele, i) =>
                        <div className="flex items-center" key={i}>
                            <input onChange={(e) => console.log(e)}
                                checked={false} id="checked-checkbox" type="checkbox" value={ele.value} className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-white dark:focus:ring-white" />
                            <label htmlFor="checked-checkbox" className="ms-2 text-base font-medium text-black">{ele.label}</label>
                        </div>)}
                </div>

                <MultiLineGraph
                    desc='Average processing time for most applications during the selected period for specific countries.'
                    title='By country'
                    data={Object.entries(data?.["Study Permit"] ?? {})}
                    lineColor='#5597AB' />
            </div>
        </div>
    )
}





export function LineGraph({
    title = '',
    desc = '',
    data = [],
    lineColor = '#202020' }) {
    return (
        <div className='border rounded-lg p-4 w-full lg:basis-1/2'>
            <div className={`flex items-center rounded-lg px-4 py-2 cursor-pointer text-[#000000CC]`}
                onClick={() => null}>
                <span className="text-base font-medium " >
                    {title}
                </span>
                <AiOutlineInfoCircle data-tooltip-id={title?.replaceAll(' ', '_')} className='ml-2' size={20} color={'#000000CC'} />
                <Tooltip
                    id={title?.replaceAll(' ', '_')}
                    place="top"
                    effect="float"
                    content={desc}
                    backgroundColor='#E69A8DFF'
                />
            </div>
            <HighchartsReact
                highcharts={Highcharts}
                options={{
                    chart: {
                        type: 'spline'
                    },
                    title: {
                        text: null
                    },
                    subtitle: {
                        text: null
                    },
                    xAxis: {
                        type: 'date',
                        categories: [''],
                        title: {
                            text: null
                        },
                        labels: { enabled: false, y: 20, rotation: 0, align: 'right' },
                        crosshair: false
                    },
                    yAxis: {
                        labels: {
                            enabled: false
                        },
                        min: 0,
                        gridLineWidth: 0,
                        title: {
                            text: '',
                            align: 'high'
                        }
                    },
                    // tooltip: {
                    //     formatter: function () {
                    //         return '';
                    //     }
                    // },
                    plotOptions: {
                        spline: {
                            lineWidth: 3,
                            states: {
                                hover: {
                                    lineWidth: 4
                                }
                            },
                            marker: {
                                enabled: false
                            },
                            color: lineColor,
                            // pointInterval: 3600000, // one hour
                            // pointStart: Date.UTC(2020, 3, 15, 0, 0, 0)
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    credits: {
                        enabled: false
                    },
                    series: [
                        {
                            name: title,
                            data
                        }
                    ]
                }}
                containerProps={{ style: { height: "298px" } }}
            />
        </div>
    )
}



export function MultiLineGraph({
    title = '',
    desc = '',
    data = [],
    lineColor = '#202020' }) {
    return (

        <div className='border rounded-lg p-4 w-full lg:basis-4/5'>
            <div className={`flex items-center rounded-lg px-4 py-2 cursor-pointer text-[#000000CC]`}
                onClick={() => null}>
                <span className="text-base font-medium " >
                    {title}
                </span>
                <AiOutlineInfoCircle data-tooltip-id={title?.replaceAll(' ', '_')} className='ml-2' size={20} color={'#000000CC'} />
                <Tooltip
                    id={title?.replaceAll(' ', '_')}
                    place="top"
                    effect="float"
                    content={desc}
                    backgroundColor='#E69A8DFF'
                />
            </div>
            <HighchartsReact
                highcharts={Highcharts}
                options={{
                    chart: {
                        type: 'spline'
                    },
                    title: {
                        text: null
                    },
                    subtitle: {
                        text: null
                    },
                    xAxis: {
                        categories: [''],
                        title: {
                            text: null
                        },
                        labels: { enabled: true, y: 20, rotation: 0, align: 'right' },
                        crosshair: true
                    },
                    yAxis: {
                        labels: {
                            enabled: false
                        },
                        min: 0,
                        gridLineWidth: 0,
                        title: {
                            text: '',
                            align: 'high'
                        }
                    },
                    // tooltip: {
                    //     formatter: function () {
                    //         return '';
                    //     }
                    // },
                    plotOptions: {
                        spline: {
                            lineWidth: 3,
                            states: {
                                hover: {
                                    lineWidth: 4
                                }
                            },
                            marker: {
                                enabled: false
                            },
                            color: lineColor
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    credits: {
                        enabled: false
                    },
                    series: [
                        {
                            data
                        },
                        {
                            data: data?.map(ele => ele - 1)
                        },
                    ]
                }}
                containerProps={{ style: { height: "298px" } }}
            />
        </div>
    )
}

export function PieChartGraph({
    title = 'Average processing time',
    desc = '',
    data = [
        {
            y: 21,
            color: "#FFEC48",
        },
        {
            y: 21,
            color: "#8AA638",
        },
        {
            y: 26,
            color: "#F69707",
        },
        {
            y: 32,
            color: "#BDDBE6"
        }
    ] }) {
    return (
        <div className='border rounded-lg p-4 basis-1/2'>
            <div className={`flex items-center rounded-lg px-4 py-2 cursor-pointer text-[#000000CC]`}
                onClick={() => null}>
                <span className="text-base font-medium " >
                    {title}
                </span>
                <AiOutlineInfoCircle data-tooltip-id={title?.replaceAll(' ', '_')} className='ml-2' size={20} color={'#000000CC'} />
                <Tooltip
                    id={title?.replaceAll(' ', '_')}
                    place="top"
                    effect="float"
                    content={desc}
                    backgroundColor='#E69A8DFF'
                />
            </div>
            <HighchartsReact
                highcharts={Highcharts}
                options={{
                    accessibility: {
                        enabled: false
                    },
                    title: {
                        text: null
                    },
                    subtitle: {
                        text: null
                    },
                    series: [
                        {
                            name: title,
                            data: data
                                ?.map(ele => ({ ...ele, name: `${ele.name?.slice(0, 15)}..` }))
                        }
                    ],
                    summarized: false,
                    boost: {
                        enabled: false
                    },
                    chart: {
                        type: "pie",
                    },
                    credits: {
                        enabled: false
                    },
                }}
                containerProps={{ style: { height: "298px" } }}
            />
        </div>
    )
}


window.addEventListener('load', () => {
    ReactDOM.render(<MainComponent />, document.getElementById('root'));
});
