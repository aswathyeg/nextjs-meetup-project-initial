import Card from "../ui/Card";
import OuterCard from "../ui/OuterCard";
import classes from "./MeetupItem.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

function MeetupItem(props) {
  const router = useRouter();
  function handleClick() {
    router.push("/" + props.id);
  }
  return (
    <OuterCard>
      {/* <header className={classes.header}>
          <div className={classes.logo}>Durian</div>
          <nav>
            <ul>
              <li>
                <Link href="/">All Items</Link>
              </li>
              <li>
                <Link href="/new-meetup">Add New </Link>
              </li>
              <li>
                <Link href="/new-meetup">Living </Link>
              </li>
              <li>
                <Link href="/new-meetup">Dining </Link>
              </li>
              <li>
                <Link href="/new-meetup">Bedroom </Link>
              </li>
              <li>
                <Link href="/new-meetup">Decor </Link>
              </li>
              <li>
                <Link href="/new-meetup">Storage</Link>
              </li>
              <li>
                <Link href="/new-meetup">Sofas</Link>
              </li>
              <li>
                <Link href="/new-meetup">Office</Link>
              </li>
            </ul>
          </nav>
        </header> */}
      <Card>
        <title>Title</title>
        <h1>Minimal work space now at home</h1>
        <h3>
          create beautiful spaces with thoughtful,elegant furniture from Durian
        </h3>

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
  );
}

export default MeetupItem;
