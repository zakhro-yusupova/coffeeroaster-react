import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import Social from "../SocialLink/Social";

import Img from "../../Assets/images/footer-logo.svg";
import facebook from "../../Assets/images/path-icon.svg";
import twitter from "../../Assets/images/path1-icon.svg";
import instagram from "../../Assets/images/path2-icon.svg";

import "./footer.css";

function Footer () {
  return (
    <footer>
    <div class="container">
    <div class="footer__inner">
    <Logo img={Img}/>
    <Nav/>
    <ul class="social__list">
    <Social link={"https://www.facebook.com/"} img={facebook}/>
    <Social link={"https://www.twitter.com/"} img={twitter}/>
    <Social link={"https://www.instagram.com/"} img={instagram}/>
    </ul>

    </div>
    </div>
    </footer>
    )
  }

  export default Footer;