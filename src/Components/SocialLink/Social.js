import "./social.css";


function Social ({link, img}) {
  return (
    <li className="social__item">
    <a className="social__link" href={link}>
    <img className="social__img" src={img} />
    </a>
    </li>
    )
  }

  export default Social;