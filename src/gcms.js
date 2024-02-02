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
import { AiOutlineArrowLeft, AiOutlineInfoCircle, AiOutlineShareAlt } from 'react-icons/ai';
import axios from 'axios';
import moment from 'moment';
import { MdCopyAll } from 'react-icons/md';
import copy from 'copy-to-clipboard';

let url = 'https://static.nextmigrant.com/dist/gcms'
export default function MainComponent() {
    const [date, setDate] = useState(moment().subtract(25, 'minute'))
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [shareOpt, setShareOpt] = useState(false)
    const [select, setSelect] = useState({
        date: 'Last_4_weeks',
        country: '',
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

    if (loading) return <div className='h-screen w-full flex justify-center pt-20'><div className='loader h-10 w-10' /></div>
    return (
        <div className='bg-'>
            <div className='flex items-center px-8 mt-10'>
                <div className='hidden lg:flex  gap-4'>
                    <select defaultValue={'Last_4_weeks'}
                        onChange={(e) => setSelect(pre => ({ ...pre, date: e.target.value }))}
                        id="date" className='select-box'>
                        {[
                            { value: 'All_time', label: 'All time' },
                            { value: 'Last_7_days', label: 'Last 7 days' },
                            { value: 'Last_4_weeks', label: 'Last 4 weeks' },
                            { value: 'Last_3_months', label: 'Last 3 months' },
                            { value: 'Last_12_months', label: 'Last 12 months' },
                            { value: 'Month_to_date', label: 'Month to date' },
                            { value: 'Year_to_date', label: 'Year to date' },
                        ]?.map(ele =>
                            <option key={ele.value} value={ele.value}>{ele.label}</option>
                        )}
                    </select>

                    <select defaultValue=''
                        onChange={(e) => setSelect(pre => ({ ...pre, country: e.target.value }))}
                        id="countries" className='select-box'>
                        {[
                            { value: '', label: "Worldwide" },
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
                        <option selected disabled value='File type'>File type</option>
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

                    {<div className={`flex items-center border rounded-lg px-4 py-1.5 cursor-pointer bg-[#1A21FF] text-white relative`}
                        onClick={() => setShareOpt(pre => !pre)}>
                        <span className="text-base font-medium " >
                            Share
                        </span>
                        <AiOutlineShareAlt className='ml-2' size={20} color={'#ffffff'} />
                        <div className={` flex-col gap-5 absolute bg-white top-6 right-6 md:top-16 md:right-10 w-72 md:w-80 p-4 rounded-lg shadow-lg z-[10001] border
                        ${shareOpt ? "flex" : "hidden"}`}>
                            <div className='flex items-center text-sm font-bold'>
                                <AiOutlineArrowLeft className='mr-2 cursor-pointer' onClick={() => setShareOpt(false)} /> Share
                            </div>
                            <div className='flex justify-between items-center border border-[#E5E7EB] p-3 rounded-md'>
                                <span className=' text-xs md:text-sm font-medium text-black'>Embed</span>
                                <MdCopyAll className='ml-auto cursor-pointer' size={20} color='#81724D' onClick={() => copy(`<div id="gcms-timelines"></div><script type="text/javascript" src="${url}.js"></script>`)} />
                            </div>
                            {/* <div className='flex justify-between items-center border border-[#E5E7EB] p-3 rounded-md'>
                                <span className=' text-xs md:text-sm font-medium text-black'>Link</span>
                                <MdCopyAll className='ml-auto cursor-pointer' size={20} color='#81724D'
                                    onClick={() => copy(`<iframe allowtransparency="true" allowfullscreen="true" src="${url}.html" frameborder="0" style="min-width:100%;max-width:100%;height:800px;border:none;"></iframe>`)} />
                            </div> */}
                        </div>
                    </div>}
                    {shareOpt && <div className="fixed top-0 bottom-0 left-0 right-0 z-[10000]" onClick={() => setShareOpt(pre => !pre)} />}

                </div>
            </div>

            <hr className='hidden lg:block' style={{ margin: '1rem' }} />

            <div className='flex flex-col lg:flex-row gap-8 mx-4 my-8 lg:m-8'>
                <div className='w-full lg:basis-1/2 flex flex-col items-center justify-center'>
                    <div className='text-[70px] font-bold text-[#13231A]'>
                        {data?.["Work Permit Total Avg"]} Days
                    </div>
                    <div className='text-lg lg:text-xl font-bold text-[#81724D]'>
                        Average processing time
                    </div>
                    <div className='frosted-glass text-sm lg:text-lg text-center font-medium text-[#81724D] p-3 lg:p-5 rounded-lg border mx-0 lg:mx-20 mt-4'>
                        Based on data from {1561} applications processed over the selected period
                    </div>
                </div>
                <LineGraph
                    title='Average processing time'
                    desc='Average processing time for most applications based on the selected period.'
                    data={Object.entries(data?.["Study Permit"] ?? {})}
                    lineColor='#565abf' />
            </div>

            <hr className='hidden lg:block' style={{ margin: '1rem' }} />

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

            <hr className='hidden lg:block' style={{ margin: '1rem' }} />

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
                    style={{
                        width: '200px',
                        background: '#ffffff40',
                        color: '#000',
                        border: 'solid 1px #e5e7eb',
                        backdropFilter: 'blur(8px)',
                        maxWidth: '309px',
                        fontSize: '1.1rem',
                        borderRadius: '6px',
                        boxShadow: '0 1px 3px 0 rgb(0 0 0 / 12%), 0 1px 2px 0 rgba(0, 0, 0, 0.08)'
                    }}
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


const colors = ['#8f6ed4', '#b76bc4', '#e37b4c', '#e35951', '#e3a049', '#3298d3', '#6772e4', '#6b7b93']

export function MultiLineGraph({
    title = '',
    desc = '',
    lineColor = '#202020' }) {
    const [selected, setSelected] = useState(['IN'])
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://api.nextmigrant.com/order-detail/get-data-by-country?country=${selected}`,
            { headers: { 'Authorization': `Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIyIiwiaWF0IjoxNzA0NzM0NzMzfQ.U8LWOf-w9glmVqlkJbzU3YZ6w_oI5LQpaPgnLgqly1q1JUzYGBoJXSIqpwVUwSZS` } })
            .then(res => {
                setData(res.data)
                setLoading(false)
            })
    }, [selected])

    return (
        <div className=' mx-4 my-8 lg:m-8 border rounded-lg '>
            <div className={`flex items-center rounded-lg p-4 cursor-pointer text-[#000000CC]`}>
                <span className="text-xl font-bold" >
                    {title}
                </span>
                <AiOutlineInfoCircle data-tooltip-id={title?.replaceAll(' ', '_')} className='ml-2' size={20} color={'#000000CC'} />
                <Tooltip
                    style={{
                        width: '200px',
                        background: '#ffffff40',
                        color: '#000',
                        border: 'solid 1px #e5e7eb',
                        backdropFilter: 'blur(8px)',
                        maxWidth: '309px',
                        fontSize: '1.1rem',
                        borderRadius: '6px',
                        boxShadow: '0 1px 3px 0 rgb(0 0 0 / 12%), 0 1px 2px 0 rgba(0, 0, 0, 0.08)'
                    }}
                    id={title?.replaceAll(' ', '_')}
                    place="top"
                    effect="float"
                    content={desc}
                    backgroundColor='#ffffff40'
                />
            </div>

            {!loading &&
                <div className='flex flex-col lg:flex-row gap-8 bg-white rounded-lg '>
                    <div className='bg-[#00000008] border-t border-r rounded-tr-md border-[#0000001A] hidden lg:flex basis-1/5  flex-col gap-3 p-4'>
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
                                <input onChange={() => {
                                    setSelected(pre => {
                                        const index = pre.indexOf(ele.value);
                                        if (index === -1) {
                                            return [...pre, ele.value];
                                        } else {
                                            return pre.filter((_, i) => i !== index);
                                        }
                                    })
                                }}
                                    checked={selected?.includes(ele.value)} id={ele.value} type="checkbox" value={ele.value} className="w-4 h-4 text-black bg-gray-100 border border-[#0000001a] rounded focus:ring-white dark:focus:ring-white" />
                                <label htmlFor={ele.value} className="ms-2 text-base font-medium text-black">{ele.label}</label>
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
                                series: Object.entries(data).map(([k, v], i) => ({ name: k, data: v?.map(e => Object.values(e)), color: colors[i] }))
                            }}
                            containerProps={{ style: { height: "298px" } }}
                        />
                    </div>
                </div>}
        </div>
    )
}

export function PieChartGraph({
    title = '',
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
                    style={{
                        width: '200px',
                        background: '#ffffff40',
                        color: '#000',
                        border: 'solid 1px #e5e7eb',
                        backdropFilter: 'blur(8px)',
                        maxWidth: '309px',
                        fontSize: '1.1rem',
                        borderRadius: '6px',
                        boxShadow: '0 1px 3px 0 rgb(0 0 0 / 12%), 0 1px 2px 0 rgba(0, 0, 0, 0.08)'
                    }}
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
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: false
                            },
                            name: title,
                            data: data
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
