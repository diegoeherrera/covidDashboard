import React from 'react'
import MainChart from '../main-chart'
import  './worldCharts.style.scss'

const WorldCharts = ({data, title}) =>{
    const {cases, deaths, recovered} = data

    return(
        <span className='card'>
            <span className='chart-container'>
                { <MainChart data={data} title={title} />}
            </span>
        </span>
    )
} 

export default WorldCharts;