import './card.style.scss'
import { getCardConfiguration } from './card.resources'


const Card = ({data,cardType,styles})=> {
    const cardConfig = getCardConfiguration(cardType)
    const renderCardBody = (cardType)=>{
        const cardStyle = cardConfig.style
       
        console.log('cases :', cardType)
        return(
            cardConfig && (
                <span className={`card-description ${cardType}`}>
                    <span className='card-header'>
                        <span className={`card-icon-default ${cardType}`}>
                        {cardConfig.icon}
                    </span>
                    <p className={`card-title ${cardType}`}>{cardConfig.title}</p>
                    </span>
                    
                    <p className={`deafult-total-style ${cardType}`}>{data}</p>
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

