import React from 'react';
import CardList from './components/cardList.component'
import WorldComponent  from './components/world/world.component';
import AppHeader from './components/appHeader/appHeader.component'
import {useEffect,useState} from 'react';
import {getAllCountriesData, getAllCasesWorldWide} from './redux/actions'
import {useSelector, useDispatch} from 'react-redux'
import {topTenByCases} from './redux/selectors'
import  './app.styles.scss';

const App =()=> {
const [countries, setCountriesData] = useState()
const dispatch=useDispatch();
const countriesData = useSelector(state=>state.data)
const casesWorlwide = useSelector(state=>state.data ? state.data.worldData : null)
const topTen = countriesData ? topTenByCases(countriesData) : null
console.log(topTen)
useEffect(()=>{
  if(!countriesData) dispatch(getAllCountriesData())
},[dispatch])

useEffect(()=>{
  if(!casesWorlwide) dispatch(getAllCasesWorldWide())
},[casesWorlwide, dispatch])

  return (
    <div className="app">
      <AppHeader/>
      {casesWorlwide && <WorldComponent worldData={casesWorlwide}/>}
    </div> 
  );
}



export default App;
/**/