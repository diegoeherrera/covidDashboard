export const processDataForChart = (data)=>{

    const deaths = data.deaths
    let result = [];
    const dataProps = Object.keys(deaths)
    const dataValues = Object.values(deaths)
    const dataLength =Object.keys(deaths).length
    for (let i=0; i<dataLength; i++){
        console.log(dataProps[i])
        result.push({
            day:dataProps[i],
            count:dataValues[i]
        })
       
    }

    console.log('result: ', result)

    return result
}

export const getLastSevenDays = (data)=>{
    const getValuesAndKeys = processDataForChart(data);
    const getLastSeven = getValuesAndKeys.slice((getValuesAndKeys.length-100),getValuesAndKeys.length)
    console.log("getLastSeven: ", getLastSeven)
    return getLastSeven;
}


