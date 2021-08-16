import {GET_COUNTRY_DATA_PENDING,GET_ALL_COUNTRY_DATA_SUCCESS,GET_ALL_COUNTRY_DATA_ERROR} from '../redux/actions'

const baseUrl = 'https://disease.sh/v3/covid-19/'


class BaseService{
   
    constructor(){
        this.baseUrl = 'https://disease.sh/v3/covid-19/'
        
        this.getAllCountries = function(){
        return fetch(`${this.baseUrl}countries`)
        .then(rawData=>rawData.json()).then(data=>{
            console.log('DATA:', data)
            return data
        }).catch(error=>error)}


        this.getTotals = async function (){    
           try{
                const response = await fetch('https://disease.sh/v3/covid-19/all')
                const formatedResponse = response.json()
                return formatedResponse;
            }catch(error){
                return error
            } 
        }

        this.getAllRecords = async function(){
            try{
                const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
                const formatedResponse = response.json()
                return formatedResponse;
            }catch(error){
                return new Error();
            }
        }
    }
}


export default BaseService


