export const getTotalsbyField = ((data,field)=>{

    const values = Object.values(data[field])
    const total = values.reduce((acc,el)=>{
        console.log(' sumamos: ',acc, '+' ,el,'=',acc+el )
        const sum = acc+el
        return sum
    },0)

    return total 
})