import Card from "../ui/Card";
import OuterCard from "../ui/OuterCard";
import classes from "./MeetupItem.module.css";
import { useRouter } from "next/router";

function MeetupItem(props) {
  const router = useRouter();
  function handleClick() {
    router.push("/" + props.id);
  }
  return (
    <li className={classes.item}>
      <OuterCard>
        <Card>
          <div className={classes.image}>
            <img src={props.image} alt={props.title} />
          </div>
          <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
          </div>
          <div className={classes.actions}>
            <button onClick={handleClick}>Show Details</button>
          </div>
        </Card>
      </OuterCard>
    </li>
  );
}

export default MeetupItem;
