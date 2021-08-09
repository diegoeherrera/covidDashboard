import {GET_ALL_COUNTRY_DATA, GET_ALL_COUNTRY_DATA_SUCCESS,GET_ALL_COUNTRY_DATA_ERROR, GET_CASES_WORLDWIDE} from './actions'
import { combineReducers } from 'redux'
import {getTotalsbyField} from './utils'
export const initialState = {
    data:null,
    casesWorlwide:[],
    loading:false
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
            case   GET_CASES_WORLDWIDE:
                console.log('GET_CASES_WORLDWIDE: ', action.payload)
                return{
                    ...state,
                    worldData:action.payload,
                    totalDeath:getTotalsbyField(action.payload,'deaths')
                }
            
        
        default: return state
    }
}

const rootReducer = combineReducers({
    data:countryDataReducer
});

export default rootReducer;