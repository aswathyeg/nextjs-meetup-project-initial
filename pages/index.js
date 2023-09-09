//domain.com/
import { MongoClient } from "mongodb";
import MeetupList from "@/components/meetups/MeetupList";
import Head from "next/head";
import { Fragment } from "react";
// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "first",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
//     address: "address1",
//     description: "first meetup",
//   },
//   {
//     id: "m2",
//     title: "second",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
//     address: "address2",
//     description: "second meetup",
//   },
// ];
function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetup</title> {/* tab (of the page title)*/}
        <meta
          name="description"
          content="Browse for a meetsup project in React"
        />
        {/*browse result*/}
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}
export async function getStaticProps() {
  //fetch data from API
  const client = await MongoClient.connect(
    "mongodb+srv://aswathy:mongoDBAswathy@cluster0.twrg0fy.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_DATA,
//     },
//   };
// }

export default HomePage;
