import React,{ useEffect, useState} from 'react';
import MainChart from './main-chart';



const CardList = ({data,topTen,cases,title=''})=>{
    console.log("topTen: ", cases)
    const {allCountriesData} = data
    const [chartData, setChartData] = useState([])

    const extractGraphicData=(topTen)=>{
        const result=[];
        for(let country of topTen){
           
              result.push({
                country: country.country,
                cases:country.cases,
                deaths:country.deaths
                
            }) 
        }
        return result
    }

    
    useEffect(()=>{
        if(topTen) setChartData(extractGraphicData(topTen))
    },[topTen,data,cases])


   
 return(
 <div>

      <h1>{title}</h1>
        {chartData && <MainChart data={chartData} cases={cases}/>}
      
 </div>   
       

 )
    
}

export default CardList;


/* {
    allCountriesData && allCountriesData.map(item=>{
        return <div>
            <span>{item.country}</span>
            <img src={item.countryInfo.flag}/>
        </div>
    })
}  */