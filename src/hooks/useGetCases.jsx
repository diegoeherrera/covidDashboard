import {getTotalsbyField} from '../redux/utils'

export const useGetCases = (data) =>{
    const getTotalCases = getTotalsbyField(data,'cases')
    console.log('getTotalCases: ',Intl.NumberFormat().format(getTotalCases));
    return Intl.NumberFormat().format(getTotalCases);
}