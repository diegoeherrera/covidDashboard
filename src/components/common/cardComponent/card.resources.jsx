
import BugReportOutlinedIcon from '@material-ui/icons/BugReportOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AirlineSeatFlatIcon from '@material-ui/icons/AirlineSeatFlat';

export const cardConfiguration = {
    cases:{
        icon: <BugReportOutlinedIcon/>,
        title:'cases',
        titleColor:'',
    },
    recovered:{
        title:'recovered',
        icon: <FavoriteBorderIcon/>,
        colorLine: 'green'
    },

    deaths:{
        title:'deaths',
        icon: <AirlineSeatFlatIcon/>,
        colorLine: 'red'
    }

}




export const getCardConfiguration = (name) =>{
    console.log('devolver: ', cardConfiguration[name])
 return cardConfiguration[name]
}