import {useState} from 'react'
import './card.style.scss'
import { getCardConfiguration } from './card.resources'
import BarChart from '../../common/bar-chart/bar-chart.component'


const Card = ({data,cardType,styles,records, title})=> {
    const cardConfig = getCardConfiguration(cardType)
    const [showExtraInfo, setShowExtraInfo ]= useState(false)
    const renderCardBody = (cardType)=>{
        const cardStyle = cardConfig.style
        const handleClick = () =>{
            console.log('aja')
            setShowExtraInfo(!showExtraInfo)
        }
    const getCardValue = ()=>{
        return data[cardType]
    }
        
        console.log('data: ', data)
        return(
            data && records  ? (
                    <span className={`card-description ${cardType}`} onClick={handleClick}>
                                               <span>
                            { showExtraInfo && <BarChart data={records[cardType]} title={title} />}
                        </span>
                        <span className="card-content">
                            <span className='card-header'>
                                <span className={`card-icon-default ${cardType}`}>
                                    {cardConfig.icon}
                                </span>
                                <p className={`card-title ${cardType}`}>{cardConfig.title}</p>
                            </span>
                                <p className={`deafult-total-style ${cardType}`}>{getCardValue()}</p>
                        </span>

                    </span>
                
            ) : null
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

