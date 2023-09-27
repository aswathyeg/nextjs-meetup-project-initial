import classes from "./Card.module.css";
import OuterCard from "./OuterCard";

function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
