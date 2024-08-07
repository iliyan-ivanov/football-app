import { Link } from "react-router-dom";
import "./MainNewsCard.css";

const MainNewsCard = (props) => {
  return (
    <Link className="main-card">
      <article className="main-card-img">
        <img
          src={props.image}
          alt="Football photo"
        />
      </article>
      <h3 className="main-card-heading">{props.title}</h3>
    </Link>
  );
};

export default MainNewsCard;
