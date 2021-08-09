
import BaseService from '../apiService/apiService'

export const GET_ALL_COUNTRY_DATA = 'GET_ALL_COUNTRY_DATA';
export const GET_ALL_COUNTRY_DATA_SUCCESS = 'GET_ALL_COUNTRY_DATA_SUCCESS' 
export const GET_ALL_COUNTRY_DATA_ERROR = 'GET_ALL_COUNTRY_DATA_ERRO' 
export const GET_CASES_WORLDWIDE = 'GET_CASES_WORLDWIDE'

const service = new BaseService
export const getAllCountriesData=()=>(dispatch)=>{
    console.log('functipon')
    dispatch({type:GET_ALL_COUNTRY_DATA,
        payload:true
    });

    
    service.getAllCountries()
    .then((data)=>{
        dispatch({type:GET_ALL_COUNTRY_DATA, payload:false})
        return dispatch({type:GET_ALL_COUNTRY_DATA_SUCCESS, payload:data})
    })
    .catch(error=>{
        return dispatch({type:GET_ALL_COUNTRY_DATA_ERROR, payload:error})
    })         
}


export const getAllCasesWorldWide =()=>(dispatch)=>{
    console.log('getAllCasesWorldWide')
    service.getCasesWorldwide().then((data)=>{
        return dispatch({type:GET_CASES_WORLDWIDE, payload:data})
    });
    




} 

