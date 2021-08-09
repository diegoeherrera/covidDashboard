
import BugReportOutlinedIcon from '@material-ui/icons/BugReportOutlined';

export const cardConfiguration = {
    cases:{
        icon: <BugReportOutlinedIcon/>,
        title:'cases',
        titleColor:'',
    },
    recovered:{
        title:'recovered',
        icon: <BugReportOutlinedIcon/>,
        colorLine: 'green'
    },

    death:{
        icon: 'iconName',
        colorLine: 'red'
    }

}




export const getCardConfiguration = (name) =>{
    console.log('devolver: ', cardConfiguration[name])
 return cardConfiguration[name]
}