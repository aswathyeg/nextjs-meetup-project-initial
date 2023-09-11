//domain.com/news
import Head from "next/head";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import { Fragment } from "react";
function NewMeetupPage() {
  const router = useRouter();
  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch(
      "/api/new-meetup", //internal api
      {
        method: "POST",
        body: JSON.stringify(enteredMeetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    router.push("/");
  }
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
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}
export default NewMeetupPage;
