import {react, useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getTotals} from '../../redux/actions'
import WorldCharts from './worldCharts.component'
import Wrapper from '../common/wrapper/wrapper.component'
import Card from '../common/cardComponent/card.component'
import { useGetCases } from '../../hooks/useGetCases'
// import {getAllCountriesData, getTotals} from './redux/actions'
import './world.styles.scss';

const WorldComponent = ({records, totals})=>{
return(
<section className='card-container'>
    <Wrapper>
        <Card title='cases' cardType='cases' data={totals} records={records} />
        <Card title='recovered' cardType='recovered' records={records} />
    </Wrapper>
</section>
    

)


}

export default WorldComponent;