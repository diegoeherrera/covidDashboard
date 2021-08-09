import './buttonPill.style.scss';

const ButtonPill = ({title,handleClick})=>(
    <button className="button-pill" handleClick>
        <p>{title}</p>
        </button>
)

export default ButtonPill;