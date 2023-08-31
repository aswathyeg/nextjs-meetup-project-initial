//domain.com/
import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "first",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "address1",
    description: "first meetup",
  },
  {
    id: "m2",
    title: "second",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "address2",
    description: "second meetup",
  },
];
function HomePage() {
  return <MeetupList meetups={DUMMY_DATA} />;
}
export default HomePage;
