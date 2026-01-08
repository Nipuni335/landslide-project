import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("landslideBlogDB");
  const { id } = req.query;

  if (req.method === "GET") {
    const post = await db.collection("posts").findOne({ _id: new ObjectId(id) });
    res.json(post);
  } else if (req.method === "PUT") {
    const { title, content, author } = req.body;
    const post = await db.collection("posts").updateOne(
      { _id: new ObjectId(id) },
      { $set: { title, content, author } }
    );
    res.json(post);
  } else if (req.method === "DELETE") {
    const post = await db.collection("posts").deleteOne({ _id: new ObjectId(id) });
    res.json(post);
  } else {
    res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
