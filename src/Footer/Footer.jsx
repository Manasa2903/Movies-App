import "./Footer.css"
import {ReactComponent as FooterLogo} from "../Manasa Movies (MM)-logo/vector/default-monochrome-white-footer.svg"

const Footer = () => 
{
    return(
        <div className="footer-bg">
            <FooterLogo className="footer-svg"/>
            <p>Developed by Manasa</p>
            <p>bmanasa71@gmail.com</p>
            <p>Copyright Manasa 2021</p>
        </div>
    )    
}

export default Footer