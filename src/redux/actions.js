
import BaseService from '../apiService/apiService'

export const GET_ALL_COUNTRY_DATA = 'GET_ALL_COUNTRY_DATA';
export const GET_ALL_COUNTRY_DATA_SUCCESS = 'GET_ALL_COUNTRY_DATA_SUCCESS' ;
export const GET_ALL_COUNTRY_DATA_ERROR = 'GET_ALL_COUNTRY_DATA_ERRO' ;
export const GET_RECORDS = 'GET_RECORDS';
export const GET_TOTALS = 'GET_TOTALS';


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


export const getRecordList =()=>(dispatch)=>{
    service.getAllRecords()
    .then((data)=>{
        console.log('ACTION GET RECORDS!: ', data)
        return dispatch({type:GET_RECORDS, payload:data})
    });
} 

export const getTotals =()=>(dispatch)=>{
    service.getTotals().then((data)=>{
        console.log('ACTION: ', data)
        return dispatch({type:GET_TOTALS, payload:data})
    });
} 




