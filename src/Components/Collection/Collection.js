import Card from "../Card/Card";

import Espresso from "../../Assets/images/gran-espresso.png";
import Planalto from "../../Assets/images/planalto.png";
import Piccollo from "../../Assets/images/picollo.png";
import Danche from "../../Assets/images/danche.png";

import "./collection.css";

function Collection () {

  return(
<div className="service">
<div className="service__menu">
            <ul className="service__list">
                <Card img={Espresso} title="Gran Espresso" text="Light and flavorful blend with cocoa and black pepper for an intense experience."/>
                <Card img={Planalto} title='Planalto' text="Brazilian dark roast with rich and velvety body, and hints of fruits and nuts."/>
                <Card img={Piccollo} title='Piccollo' text="Mild and smooth blend featuring notes of toasted almond and dried cherry."/>
                <Card img={Danche} title='Danche' text="Ethiopian hand-harvested blend densely packed with vibrant fruit notes."/>
            </ul>
        </div>
</div>
  )
}

export default Collection;