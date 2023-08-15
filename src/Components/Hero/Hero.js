import Btn from "../Button/Button";

import "./hero.css";

function Hero () {

  return (

    <div className="hero">
    <div className="container">
    <div className="hero__inner">
    <div className="hero__info">
    <h1 className="hero__title"> Great coffee made simple. </h1>
    <p className="hero__text"> Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule. </p>
    <Btn/>
    </div>
    </div>
    </div>
    </div>
    )
  }

  export default Hero;