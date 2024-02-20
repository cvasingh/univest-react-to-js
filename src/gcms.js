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
import { FaWhatsapp, FaCode, FaAngleDown } from 'react-icons/fa';
import { RxCross1 } from "react-icons/rx";



let url = 'https://nextmigrant.com/timelines/gcms/';
let iframe = `<iframe allowtransparency="true" allowfullscreen="true" src="${url}?nocontent=true" frameborder="0" style="min-width:100%; max-width:100%; height:800px; border:none; background:#FFF"> </iframe>`
const params = new URLSearchParams(window.location.search)
export default function MainComponent() {
    const [date, setDate] = useState(moment().subtract(25, 'minute'))
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [mF, setMF] = useState(false)
    const [embedCode, setEmbedCode] = useState(false)
    const [copied, setCopied] = useState(false)
    const [shareOpt, setShareOpt] = useState(false)
    const [select, setSelect] = useState({
        date: 'Last_3_months',
        country: '',
        fileType: '',
        applicationType: ''
    });

    useEffect(() => {
        setMF(false)
        setLoading(true)
        axios.get(`https://api.nextmigrant.com/order-detail/get-data?country=${select?.country}&fileType=null&monthToDate=${select?.date}&applicationType=null&order_details=null`,
            { headers: { 'Authorization': `Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIyIiwiaWF0IjoxNzA0NzM0NzMzfQ.U8LWOf-w9glmVqlkJbzU3YZ6w_oI5LQpaPgnLgqly1q1JUzYGBoJXSIqpwVUwSZS` } })
            .then(res => {
                setData(res.data)
                setTimeout(() => setLoading(false), 500)
            })
    }, [select])

    useEffect(() => {
        if (params.get('nocontent')) {
            while (document.getElementById('nocontent')) {
                var element = document.getElementById('nocontent');
                element.parentNode.removeChild(element);
            }
        } else {
            document.body.style.backgroundImage = "url('https://cdn.nextmigrant.com/wp-content/uploads/2024/01/nm-bg-1.jpeg')";
            document.body.style.backgroundSize = "200% 400px";
            document.body.style.backgroundRepeat = "no-repeat";

        }
    })
    useEffect(() => {
        if (shareOpt || mF || embedCode) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [shareOpt, mF, embedCode])



    return (
        <div className='bg-'>
            <div className='flex items-center px-4 lg:px-8 mt-10 relative'>
                <div className='text-sm px-3 py-0.5 rounded-md shadow border flex items-center lg:hidden'
                    onClick={() => setMF(pre => !pre)}>Filters <FaAngleDown className='ml-1' />
                </div>

                <div className={`${mF ? 'flex z-[10001]' : 'hidden'} flex-col lg:flex lg:flex-row  gap-4 absolute top-4 rounded-xl shadow-2xl lg:shadow-none lg:static bg-white lg:bg-transparent p-3 lg:p-0 border lg:border-0`}>
                    <select defaultValue={'Last_3_months'}
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
                    <div className="text-xs lg:text-base font-medium text-[#13231A99] text-right" >
                        Last updated:  {moment(date).fromNow()}<br className='flex lg:hidden' /> <span className="text-[#0462FE]"
                            onClick={() => {
                                setDate(moment())
                                setLoading(true)
                                setTimeout(() => setLoading(false), 500)
                            }}> Refresh data  </span>
                    </div>

                    {<div className={`hidden lg:flex items-center border rounded-lg px-4 py-1.5 cursor-pointer bg-[#0462FE] text-white relative`}
                        onClick={() => setShareOpt(pre => !pre)}>
                        <span className="text-base font-medium " >
                            Share
                        </span>
                        <AiOutlineShareAlt className='ml-2' size={20} color={'#ffffff'} />
                        <div className={`flex-col gap-5 absolute bg-white top-6 right-6 md:right-10 w-72 md:w-80 p-4 rounded-lg shadow-lg z-[10001] border
                        ${shareOpt ? "flex" : "hidden"}`}>
                            <div className='flex items-center justify-between text-sm font-bold text-black'>
                                <div>Share</div>
                                <RxCross1 className='mr-2 cursor-pointer' color='#202020' onClick={(e) => {
                                    setShareOpt(false)
                                    e.stopPropagation()
                                }} />
                            </div>
                            {/* <div className='flex justify-between items-center border border-[#E5E7EB] p-3 rounded-md'>
                                <span className=' text-xs md:text-sm font-medium text-black'>Embed</span>
                                <MdCopyAll className='ml-auto cursor-pointer' size={20} color='#81724D' onClick={() => copy(`<div id="gcms-timelines"></div><script type="text/javascript" src="${url}.js"></script>`)} />
                            </div> */}
                            <a href={`https://api.whatsapp.com/send?text=Check out the latest GCMS notes processing times: \n${url}`} target='_blank'>
                                <div className='flex justify-between items-center border border-[#E5E7EB] p-3 rounded-md'>
                                    <span className=' text-xs md:text-sm font-medium text-black'>Share on Whatsapp</span>
                                    <FaWhatsapp className='ml-auto cursor-pointer' size={20} color='#81724D' />
                                </div>
                            </a>
                            <div className='flex justify-between items-center border border-[#E5E7EB] p-3 rounded-md'
                                onClick={(e) => {
                                    copy(url)
                                    setCopied(true)
                                    setTimeout(() => setCopied(false), 2000)
                                    e.stopPropagation()
                                }}>
                                <span className=' text-xs md:text-sm font-medium text-black'>{copied ? 'Copied!' : 'Copy link'}</span>
                                <MdCopyAll className='ml-auto cursor-pointer' size={20} color='#81724D' />
                            </div>
                            <div className='flex justify-between items-center border border-[#E5E7EB] p-3 rounded-md'
                                onClick={() => setEmbedCode(true)}>
                                <span className=' text-xs md:text-sm font-medium text-black'>Embed code</span>
                                <FaCode className='ml-auto cursor-pointer' size={20} color='#81724D' />
                            </div>
                        </div>
                    </div>}
                    {embedCode &&
                        <div className='fixed z-[10001] w-11/12 lg:w-[600px] h-auto m-auto inset-x-0 top-1/3 p-4 bg-white border rounded-lg shadow-2xl px-8 py-6'>
                            <div className='flex items-center justify-between text-base font-bold text-black'>
                                <div>Embed this on your website</div>
                                <RxCross1 className='mr-2 cursor-pointer' color='#202020' onClick={(e) => {
                                    setEmbedCode(false)
                                    e.stopPropagation()
                                }} />
                            </div>
                            <code className="block rounded-lg select-all" id='app_wizards'>
                                {iframe}
                            </code>
                            <style>{`
                            #app_wizards{
                                color: #202020;
                                white-space: pre-wrap;
                                word-wrap: break-word;
                                resize: none;
                                background-color: rgb(242 246 252);
                                border: 1px solid #c8ceed;
                                width: 100%;
                                max-height: 200px;
                                margin: 12px 0 0;
                                padding: 12px 16px;
                                font-size: 14px;
                                line-height: 24px;
                                overflow-y: auto
                            }
                            `}</style>
                            <div className='w-[120px] mt-5 mx-auto shadow  border rounded-lg px-4 pt-[1px] pb-2 cursor-pointer bg-[#0462FE] text-white text-center'
                                onClick={() => {
                                    copy(iframe)
                                    setCopied(true)
                                    setTimeout(() => {
                                        setCopied(false)
                                        setEmbedCode(false)
                                    }, 3000)
                                }}>
                                <span className=' text-xs md:text-sm font-medium'>{copied ? 'Copied!' : 'Copy'}</span>
                            </div>
                        </div>
                    }


                    {(shareOpt || mF || embedCode) && <div className="fixed top-0 bottom-0 left-0 right-0 z-[10000] bg-[#20202026] backdrop-blur-[1px]" onClick={() => {
                        setShareOpt(false)
                        setMF(false)
                        setEmbedCode(false)
                    }} />}

                </div>
            </div>

            <hr className='hidden lg:block' style={{ margin: '1rem' }} />
            {loading ?
                <div className='h-screen w-full flex justify-center pt-20'><div className='loader h-10 w-10' /></div>
                : <>
                    <div className='flex flex-col lg:flex-row gap-8 mx-4 my-8 lg:m-8'>
                        <div className='w-full lg:basis-1/2 flex flex-col items-center justify-center'>
                            <div className='text-[70px] font-bold text-[#13231A]'>
                                {data?.["Work Permit Total Avg"]} Days
                            </div>
                            <div className='text-lg lg:text-xl font-bold text-[#81724D]'>
                                Average processing time
                            </div>
                            <div className='frosted-glass text-sm lg:text-lg text-center font-medium text-[#81724D] p-3 lg:p-5 rounded-lg border mx-0 lg:mx-20 mt-4'>
                                Based on data from {1561 + data['total_records']} applications processed over the selected period
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
                </>}

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
                        lineColor: '#00000033',
                        categories: Object.entries(data)?.map(([k, v]) => moment(v[0], 'YYYY-MM-DD').format("DD 'MMM YY"))
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
                    tooltip: {
                        // Enable HTML tooltips
                        useHTML: true,
                        // Custom formatter function to define the content of the tooltip
                        formatter: function () {
                            // Example content, you can customize it as per your requirement
                            return `<b>${this.point.name}</b>: ${this.y} days`;
                        },
                        // Style for the tooltip (optional)
                        style: {
                            pointerEvents: 'auto'
                        }
                    },
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
                            data: Object.entries(data)?.map(([k, v]) => v)
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

    const temp = {
        'IN': 'India',
        'NG': 'Nigeria',
        'PH': 'Philippines',
        'PK': 'Pakistan',
        'BD': 'Bangladesh',
        'BG': 'Bulgaria',
        'US': 'United States'
    }


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
                                plotOptions: {
                                    spline: {
                                        lineWidth: 2,
                                        states: {
                                            hover: {
                                                lineWidth: 3
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
                                series: Object.entries(data).map(([k, v], i) => ({ name: k, data: v?.map(e => Object.values(e)), color: colors[i] })),
                                tooltip: {
                                    useHTML: true,
                                    formatter: function () {
                                        return `<b>${temp[this.series.name] ?? ""}</b>: ${Highcharts.numberFormat(this.y, 0)} days`;
                                    },
                                    // Style for the tooltip (optional)
                                    style: {
                                        pointerEvents: 'auto'
                                    }
                                }
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
                    tooltip: {
                        // Enable HTML tooltips
                        useHTML: true,
                        // Custom formatter function to define the content of the tooltip
                        formatter: function () {
                            // Example content, you can customize it as per your requirement
                            return `<b>${this.point.name}</b>: ${this.y} days (${Highcharts.numberFormat(this.percentage, 2)}%)`;
                        },
                        // Style for the tooltip (optional)
                        style: {
                            pointerEvents: 'auto'
                        }
                    }
                }}
                containerProps={{ style: { height: "298px" } }}
            />
        </div>
    )
}


window.addEventListener('load', () => {
    ReactDOM.render(<MainComponent />, document.getElementById('gcms-timelines'));
});
