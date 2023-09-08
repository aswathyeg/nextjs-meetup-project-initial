import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method == "POST") {
    const data = req.body;
    // const { titile, image, address, description } = data;
    const client = await MongoClient.connect(
      "mongodb+srv://aswathy:mongoDBAswathy@cluster0.twrg0fy.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Meetup inserted !" });
  }
}
export default handler;
