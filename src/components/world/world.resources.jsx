export const processDataForChart = (data)=>{


    let result = [];
    const dataProps = Object.keys(data)
    const dataValues = Object.values(data)
    const dataLength =Object.keys(data).length
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

export const getLastSevenDays = (data, limit)=>{
    const getValuesAndKeys = processDataForChart(data);
    const getLastSeven = getValuesAndKeys.slice((getValuesAndKeys.length - limit),getValuesAndKeys.length)
    return getLastSeven;
}


