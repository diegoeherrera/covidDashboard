import {GET_ALL_COUNTRY_DATA, GET_ALL_COUNTRY_DATA_SUCCESS,GET_ALL_COUNTRY_DATA_ERROR, GET_RECORDS,GET_TOTALS} from './actions'
import { combineReducers } from 'redux'
import {getTotalsbyField} from './utils'
export const initialState = {
    totals:[],
    records:[],
    loading:false,
    error:null
}

const countryDataReducer = (state=initialState,action)=>{
    switch(action.type){
        case GET_ALL_COUNTRY_DATA:
            return{
                ...state,
                loading:action.payload
            }
        case GET_ALL_COUNTRY_DATA_SUCCESS:
            console.log(action)
            return{
                ...state,
                allCountriesData:action.payload,
                loading:false
            }
            
        case   GET_ALL_COUNTRY_DATA_ERROR:
            return{
                ...state,
                error:action.payload
            }
            case   GET_RECORDS:
                console.log('GET_RECORDS:::: ', action.payload)
                return{
                    ...state,
                    records:action.payload,
                }
                case   GET_TOTALS:
                    console.log('GET_TOTALS: ', action.payload)
                    return{
                        ...state,
                        totals:action.payload
                        //totalDeath:getTotalsbyField(action.payload,'deaths')
                    }
        
        default: return state
    }
}

const rootReducer = combineReducers({
    data:countryDataReducer
});

export default rootReducer;