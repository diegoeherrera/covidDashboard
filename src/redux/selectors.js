import { createSelector } from 'reselect';
const allcountryDataState = (state)=>state

const getTopTen = (list)=>{
    if(list){
        return list.sort((a,b)=>(a.cases < b.cases) ? 1 : -1).slice(0,9)
    }

    return null
}

export const topTenByCases = createSelector(
    allcountryDataState,
    (countryList)=>  getTopTen(countryList.allCountriesData) || []
)

export const fetchWorlData=createSelector(
    allcountryDataState,
    (worlData)=>(allcountryDataState)=>allcountryDataState.worldData 
)


