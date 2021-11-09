import "./Navbar.css";
import {ReactComponent as MMLogo} from "../Manasa Movies (MM)-logo/vector/default-monochrome.svg"

const Navbar = () =>
{

    return (
        <nav className="navbar navbar-light bg-light fixed-top">
            <MMLogo className="svg-icon" onClick={() => window.scroll(0,0)}/>
            {/* <img src={cover} width="30" height="30" className="d-inline-block align-top svg-icon" alt="" onClick={() => window.scroll(0,0)}/> */}
        </nav>
    )
}

export default Navbar
