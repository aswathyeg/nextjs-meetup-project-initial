import classes from "./OuterCard.module.css";

function OuterCard(props) {
  return <div className={classes.outerCard}>{props.children}</div>;
}

export default OuterCard;
