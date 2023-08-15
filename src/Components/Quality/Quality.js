import Card from "../QualityCard/QualtyCard";

import coffee from "../../Assets/images/coffe-icon.svg";
import gift from "../../Assets/images/gift.svg";
import delivery from "../../Assets/images/delivery.svg";

import "./quality.css";

function Quality () {
  return (
    <div className="quality">
    <div className="container">
    <div className="quality__inner">
    <h2 className="quality__title">Why choose us?</h2>
    <div className="quality__text-box">
    <p className="quality__text">A large part of our role is choosing which particular coffees will be featured
    in our range. This means working closely with the best coffee growers to give
    you a more impactful experience on every level.</p>
    </div>
    <ul className="quality__list">
    <Card img={coffee} title="Best quality" text="Discover an endless variety of the world’s best artisan coffee from each of our roasters."/>
    <Card img={gift} title='Exclusive benefits' text="Special offers and swag when you subscribe, including 30% off your first shipment."/>
    <Card img={delivery} title='Free shipping' text="We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."/>
    </ul>
    </div>
    </div>
    </div>
    )
  }

  export default Quality;