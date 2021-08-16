import React from 'react';
import CardList from './components/cardList.component'
import WorldComponent  from './components/world/world.component';
import AppHeader from './components/appHeader/appHeader.component'
import {useEffect,useState} from 'react';
import {getRecordList, getTotals, getCases} from './redux/actions'
import {useSelector, useDispatch} from 'react-redux'
import {topTenByCases, totalList, recordsList} from './redux/selectors'
import  './app.styles.scss';

const App =()=> {
const [countries, setCountriesData] = useState()
const dispatch=useDispatch();
const countriesData = useSelector(state=>state.data)
const {records} = useSelector(recordsList)
// const topTen = countriesData ? topTenByCases(countriesData) : null
const {totals} = useSelector(totalList);


useEffect(()=>{
  if(records) dispatch(getRecordList())
  console.log('records:se ', records)
},[records])

useEffect(()=>{
  if(!totals) dispatch(getTotals())
  console.log('totals:se ', totals)
},[totals])
const isLoading = records && totals
  return (
    <div className="app">
      <AppHeader/>
      {
      (<WorldComponent
       records={records}
       totals={totals}/>) 
       
       }
    </div> 
  );
}



export default App;
/**/