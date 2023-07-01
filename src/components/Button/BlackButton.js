import RoundedButton from "./RoundedButtonStyled";
import { MdOutlineLanguage } from "react-icons/md";
const BlackButton = ({ buttonText }) => {
    return (
        
        <RoundedButton>
            <button variant="light" className="blackButton rounded-pill">
            <MdOutlineLanguage size={20} className="mx-1"/>
            {buttonText}</button>
        </RoundedButton>
    )
}

export default BlackButton;