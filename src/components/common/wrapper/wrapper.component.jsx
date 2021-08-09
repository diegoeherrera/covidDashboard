import './wrapper.style.scss'

import { Children } from "react";

const Wrapper = (props) =>(
    <div className='wrapper'>
        {props.children}
    </div>
)

export default Wrapper;