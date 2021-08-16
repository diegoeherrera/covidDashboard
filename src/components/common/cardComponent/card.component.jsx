import {useState} from 'react'
import './card.style.scss'
import { getCardConfiguration } from './card.resources'
import BarChart from '../../common/bar-chart/bar-chart.component'


const Card = ({data,cardType,styles,records})=> {
    const cardConfig = getCardConfiguration(cardType)
    const [showExtraInfo, setShowExtraInfo ]= useState(false)
    const renderCardBody = (cardType)=>{
        const cardStyle = cardConfig.style
        const handleClick = () =>{
            setShowExtraInfo(!showExtraInfo)
        }
       
   
        return(
            cardConfig && records && (
                    <span className={`card-description ${cardType}`} onClick={handleClick}>
                        <span className="card-content">
                            <span className='card-header'>
                                <span className={`card-icon-default ${cardType}`}>
                                    {cardConfig.icon}
                                </span>
                                <p className={`card-title ${cardType}`}>{cardConfig.title}</p>
                            </span>
                                <p className={`deafult-total-style ${cardType}`}>{data[`${cardType}`]}</p>
                        </span>
                        <span>
                            { true && showExtraInfo && <BarChart />}
                        </span>
                    </span>
                
            ) 
        )
    }
    const renderDefaultCard =  () =>{
        return(
            <span className={`card-container`}>
               {renderCardBody(cardType)}
            </span>
        )
    }

    const renderCustomCard = (styles) =>{
        return <h2>'custom componenet'</h2>
    }

    return(
        
        styles ? renderCustomCard() : renderDefaultCard()
        
    )
}

export default Card;

