import "./workcard.css";


function Card ({nums, title, text}) {
  return (
    <li className="work__item">
    <span className="work__nums"> {nums}</span>
    <h2 className="work__subtitle">{title}</h2>
    <p className="work__subtext">{text}</p>
    </li>
    )
  }

  export default Card;