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
const records = useSelector(state=>state.data.records)
// const topTen = countriesData ? topTenByCases(countriesData) : null
const totals = useSelector(state=>state.data.totals);


useEffect(()=>{
  if(records.length < 1) dispatch(getRecordList())
},[records])

useEffect(()=>{
  if(totals.length < 1) dispatch(getTotals())
},[totals])

const isLoading = records && totals
  return (
    <div className="app">
      {false ? 'loading...' : (
        <React.Fragment>
          <AppHeader/>
          <WorldComponent
          records={records}
          totals={totals}/>
        </React.Fragment> )}
    </div> 
  );
}



export default App;
/**/