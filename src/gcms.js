// MyComponent.js
import ReactDOM from 'react-dom';

"use client"
import React, { useEffect, useId, useState } from 'react'
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import 'react-tooltip/dist/react-tooltip.css'
import './output.css';
import './input.css';
import { Tooltip } from 'react-tooltip'
import { AiOutlineInfoCircle, AiOutlineShareAlt } from 'react-icons/ai';
import axios from 'axios';
import moment from 'moment';


export default function MainComponent() {
    const [date, setDate] = useState(moment().subtract(25, 'minute'))
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [select, setSelect] = useState({
        date: 'All time',
        country: 'IN',
        fileType: '',
        applicationType: ''
    });

    useEffect(() => {
        axios.get(`https://api.nextmigrant.com/order-detail/get-data?country=${select?.country}&fileType=null&monthToDate=${select?.date}&applicationType=null&order_details=null`,
            { headers: { 'Authorization': `Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIyIiwiaWF0IjoxNzA0NzM0NzMzfQ.U8LWOf-w9glmVqlkJbzU3YZ6w_oI5LQpaPgnLgqly1q1JUzYGBoJXSIqpwVUwSZS` } })
            .then(res => {
                setData(res.data)
                setTimeout(() => setLoading(false), 500)
            })
    }, [select])

    if (loading) return <div className='h-full w-full flex justify-center pt-20'><div className='loader h-10 w-10' /></div>
    return (
        <div className='bg-'>
            <div className='flex items-center px-8 mt-10'>
                <div className='hidden lg:flex  gap-4'>
                    <select defaultValue={'Month To Date'}
                        onChange={(e) => setSelect(pre => ({ ...pre, monthToDate: e.target.value }))}
                        id="monthToDate " className='select-box'>
                        <option selected disabled value='Month To Date'>Month To Date</option>
                        {[
                            { value: 'All time', label: 'All time' },
                            { value: 'Last 7 days', label: 'Last 7 days' },
                            { value: 'Last 4 weeks', label: 'Last 4 weeks' },
                            { value: 'Last 3 months', label: 'Last 3 months' },
                            { value: 'Last 12 months', label: 'Last 12 months' },
                            { value: 'Month to date', label: 'Month to date' },
                            { value: 'Year to date', label: 'Year to date' },
                        ]?.map(ele =>
                            <option key={ele.value} value={ele.value}>{ele.label}</option>
                        )}
                    </select>
                    <select defaultValue='IN'
                        onChange={(e) => setSelect(pre => ({ ...pre, country: e.target.value }))}
                        id="countries " className='select-box'>
                        {[
                            { value: null, label: "Worldwide" },
                            { value: "IN", label: "India" },
                            { value: "NG", label: "Nigeria" },
                            { value: "PH", label: "Philippines" },
                            { value: "PK", label: "Pakistan" },
                            { value: "BD", label: "Bangladesh" },
                            { value: "BG", label: "Bulgaria" },
                            { value: "US", label: "United States" }
                        ]?.map(ele =>
                            <option key={ele.value} value={ele.value}>{ele.label}</option>
                        )}
                    </select>


                    <select defaultValue='File Type'
                        onChange={(e) => setSelect(pre => ({ ...pre, fileType: e.target.value }))}
                        id="fileType " className='select-box'>
                        <option selected disabled value='File Type'>File Type</option>
                        {[
                            { value: "GCMS notes", label: 'GCMS notes' },
                            { value: "CBSA notes", label: 'CBSA notes' },
                        ]?.map(ele =>
                            <option key={ele.value} value={ele.value}>{ele.label}</option>
                        )}
                    </select>
                </div>

                <div className='flex flex-col lg:flex-row lg:items-center items-end gap-2 lg:gap-4 ml-auto'>
                    <div className="text-base font-medium text-[#13231A99]" >
                        Last updated:  {moment(date).fromNow()} <span className="text-[#1A21FF]"
                            onClick={() => {
                                setDate(moment())
                                setLoading(true)
                                setTimeout(() => setLoading(false), 500)
                            }} > Refresh data  </span>
                    </div>

                    <div className={`flex items-center border rounded-lg px-4 py-1.5 cursor-pointer bg-[#1A21FF] text-white`}
                    >
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
                    <div className='frosted-glass text-sm lg:text-lg text-center font-medium text-[#81724D] p-3 lg:p-5 rounded-lg border mx-0 lg:mx-20 mt-4'>
                        Based on data from 4,561 applications processed over a period of three month
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
                            color: "#204289",
                        },
                        {
                            name: "Permanent Residence Total Avg",
                            y: data?.["Permanent Residence Total Avg"],
                            color: "#465ba4",
                        },
                        {
                            name: "Study Permit Total Avg",
                            y: data?.["Study Permit Total Avg"],
                            color: "#ed6b11",
                        },
                        {
                            name: "Visitor (Guest) Visa Total Avg",
                            y: data?.["Visitor (Guest) Visa Total Avg"],
                            color: "#5596ac"
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


            <MultiLineGraph
                desc='Average processing time for most applications during the selected period for specific countries.'
                title='By country'
                data={Object.entries(data?.["Study Permit"] ?? {})}
                lineColor='#5597AB' />
        </div>
    )
}


export function LineGraph({
    title = '',
    desc = '',
    data = [],
    lineColor = '#202020' }) {
    return (
        <div className='border rounded-lg p-4 w-full lg:basis-1/2 bg-white'>
            <div className={`flex items-center rounded-lg px-4 py-2 cursor-pointer text-[#000000CC]`}>
                <span className="text-xl font-bold" >
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
                        // type: 'date',
                        // categories: [''],
                        // title: {
                        //     text: null
                        // },
                        labels: { enabled: true, style: { color: '#00000066', fontSize: '12px' } },
                        crosshair: true,
                        lineWidth: 2,
                        tickWidth: 2,
                        tickColor: '#00000033',
                        lineColor: '#00000033'
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
        <div className=' mx-4 my-8 lg:m-8 border rounded-lg '>
            <div className={`flex items-center rounded-lg p-4 cursor-pointer text-[#000000CC]`}>
                <span className="text-xl font-bold" >
                    {title}
                </span>
                <AiOutlineInfoCircle data-tooltip-id={title?.replaceAll(' ', '_')} className='ml-2' size={20} color={'#000000CC'} />
                <Tooltip
                    style={{
                        // width: '200px',
                        // background: '#ffffff40',
                        // color: '#000',
                        // border: 'solid 1px #e5e7eb',
                        // backdropFilter: 'blur(4px)',
                        // maxWidth: '309px',
                        // fontSize: '1.1rem',
                        // borderRadius: '6px',
                        // boxShadow: '0 1px 3px 0 rgb(0 0 0 / 12%), 0 1px 2px 0 rgba(0, 0, 0, 0.08)'
                    }}

                    id={title?.replaceAll(' ', '_')}
                    place="top"
                    effect="float"
                    content={desc}
                    backgroundColor='#ffffff40'
                />
            </div>

            <div className='flex flex-col lg:flex-row gap-8 bg-white rounded-lg'>
                <div className='bg-[#00000008] hidden lg:flex basis-1/5  flex-col gap-3 p-4'>
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
                <div className='p-4 w-full lg:basis-4/5 bg-white'>
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
                                // type: 'date',
                                // categories: [''],
                                // title: {
                                //     text: null
                                // },
                                labels: { enabled: true, style: { color: '#00000066', fontSize: '12px' } },
                                crosshair: true,
                                lineWidth: 2,
                                tickWidth: 2,
                                tickColor: '#00000033',
                                lineColor: '#00000033'
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
            </div>
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
        <div className='border rounded-lg p-4 basis-1/2 bg-white'>
            <div className={`flex items-center rounded-lg px-4 py-2 cursor-pointer text-[#000000CC]`}>
                <span className="text-xl font-bold" >
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
    ReactDOM.render(<MainComponent />, document.getElementById('gcms-timelines'));
});
