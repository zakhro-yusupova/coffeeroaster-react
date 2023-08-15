import Btn from "../Button/Button";
import Card from "../WorkCard/WorkCard";


import "./work.css";

function Work () {
  return (
    <div className="work">
    <div className="container">
    <div className="work__info">
    <h2 className="work__title">How it works</h2>
    <ol className="work__list">

    <Card nums="01" title="Pick your coffee" text="Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."/>

    <Card nums="02" title="Choose the frequency" text="Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."/>

    <Card nums="03" title="Receive and enjoy!" text="We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."/>

    </ol>
    <Btn/>
    </div>
    </div>
    </div>
    )
  }

  export default Work;