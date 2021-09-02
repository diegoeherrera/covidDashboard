import { createSelector } from 'reselect';
const allcountryDataState = (state)=>state
const totals = (state) => state.data.totals;
const records = (state) => state.data.records


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

export const totalList = createSelector(
    totals,
    (totals)=>totals.data || []
)

export const recordsList = createSelector(
    records,
    (records)=>records
)




