import {react, useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getAllCasesWorldWide} from '../../redux/actions'
import WorldCharts from './worldCharts.component'
import Wrapper from '../common/wrapper/wrapper.component'
import Card from '../common/cardComponent/card.component'
import { useGetCases } from '../../hooks/useGetCases'
import './world.styles.scss';

const WorldComponent = ({worldData})=>{
    console.log('WorldComponent: ',worldData )
    const totalCases = useGetCases(worldData)

return(
<section className='card-container'>
    <Wrapper>
        <Card title='cases' cardType='cases' data={totalCases}/>
        <Card title='recovered' cardType='deaths' data={totalCases}/>
        <Card title='recovered' cardType='recovered' data={totalCases}/>
        
    </Wrapper>
    </section>
    

)


}

export default WorldComponent;



/*

{         <div className='buttons-container'>
            <ButtonPill
            title='recovered'
            onClick
            className='pill'
            />
            <ButtonPill
            title='vaccinated'
            onClick

            />
            <ButtonPill
            title='infected'
            onClick
            />
        </div> 
        <div>
            <div>
                <h6>deaths</h6>
            </div>
            <div className='chart-container'>
                <WorldCharts type='death' data={worldData}/>
            </div>
        </div>
        <div>
            <div>
                <h6>recovered</h6>
            </div>
            <div className='chart-container'>
                <WorldCharts type='recovered'/>
            </div>
        </div>
        <div>
            <div>
                <h6>cases</h6>
            </div>
            <div className='chart-container'>
                <WorldCharts type='cases'/>
            </div>
        </div>
        <div>
            <div>
                <h6>vaccinated</h6>
            </div>
            <div className='chart-container'>
                <WorldCharts type='vaccinated'/>
            </div>
        </div>
   
    


*/