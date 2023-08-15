import "./card.css";


function Card ({img, title, text}) {
  return (

    <li className="service__item">
    <img className="service__img" src={img} />
    <h2 className="service__title">{title}</h2>
    <p className="service__text">{text}</p>
    </li>

    )
  }

  export default Card;