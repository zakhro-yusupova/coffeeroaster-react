import "./qualitycard.css";

function Card ({img, title, text}) {
  return (
    <li className="quality__item">
    <img className="quality__image" src={img} />
    <h2 className="quality__subtitle">{title}</h2>
    <p className="quality__subtext">{text}</p>
    </li>
    )
  }

  export default Card;