import { Link } from "react-router-dom";
import "./SimpleNewsCard.css";

const SimpleNewsCard = (props) => {
  return (
    <Link to={`/${props.id}`} className="simple-card">
      <article className="simple-card-img">
        <img
          src={props.image}
          alt="Football photo"
        />
      </article>
      <h3 className="simple-card-heading">{props.title}</h3>
    </Link>
  );
};

export default SimpleNewsCard;