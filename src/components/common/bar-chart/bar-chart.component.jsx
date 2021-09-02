import React from 'react';
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';
import { getLastSevenDays } from '../../world/world.resources';
import './bar-chart.style.scss'
 

const BarChart = ({data, title})=>{
  // const processData = getLastSevenDays(data)
  //console.log('processData: ',processData)
  const renderGraph = ()=>(
    <div onClick={(e)=>e.stopPropagation()}>
      <ResponsiveContainer width={250} height={150}>
      <LineChart  data={chartData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }} >
      <XAxis dataKey="day"   hide/>
      <YAxis domain={['auto', 'dataMax']} hide/>
      <Tooltip />
      <Line type="natural" dataKey="count"  stroke="#A3124C" dot={false}/> 
    </LineChart>
    </ResponsiveContainer>
    </div>
    
    )
 const chartData = getLastSevenDays(data,7) 
  
  
    return(
      <>
        <div className='graph-footer'>
            <p className='graph-title'>LAST 7 DAYS</p>
            <button className="graph-close-btn">X</button>
        </div> 
        {
          data ? renderGraph() : 'loading'
        }

      </>
    )
     

    
}

export default BarChart;