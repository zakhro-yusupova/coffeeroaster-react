import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import Img from "../../Assets/images/header-logo.svg";



import  "./header.css";


const Header = () => {

  return (
    <header className="header">
    <div className="container">
    <div className="header__inner">
    <Logo img={Img}/>
    <Nav/>
    </div>
    </div>
    </header>
    )
  }

  export default Header