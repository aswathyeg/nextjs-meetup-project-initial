//domain.com/
import MeetupList from "@/components/meetups/MeetupList";
import city1 from "../components/assets/city1.jpg";
function HomePage() {
  const DUMMY_DATA = [
    {
      id: "m1",
      title: "first",
      image: { city1 },
      address: "address1",
      description: "first meetup",
    },
  ];
  return <MeetupList meetups={DUMMY_DATA} />;
}
export default HomePage;
