import React from 'react';
import {processDataForChart,getLastSevenDays} from '../components/world/world.resources'
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
 

const MainChart = ({data, title})=>{
  const processData = getLastSevenDays(data)
  console.log('processData: ',processData)

    return(
      <>
      { processData  && (<LineChart width={250} height={250} data={processData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }} dot={false}>
        
        <XAxis dataKey="day"   hide/>
        <YAxis domain={['auto', 'dataMax']} hide/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="count" /> stroke="#A3124C" 
      </LineChart>)}
      <div>
          {title}
           333.234.2342
      </div>
      </>
    )
     

    
}


export default MainChart;

