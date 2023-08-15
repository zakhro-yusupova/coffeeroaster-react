import "./nav.css";

function Nav (){

  return (

    <nav className="site-menu">
    <ul className="site-menu__list">
      <li className="site-menu__item"> <a className="site-menu__link" href="./index.html"> Home </a> </li>
      <li className="site-menu__item"> <a className="site-menu__link" href="./about.html"> About us </a> </li>
      <li className="site-menu__item"> <a className="site-menu__link" href="./subscribe.html"> Create your plan </a> </li>
    </ul>
  </nav>
  )
}

export default Nav ;