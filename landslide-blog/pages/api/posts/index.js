import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("landslideBlogDB");

  if (req.method === "GET") {
    const posts = await db.collection("posts").find({}).sort({ date: -1 }).toArray();
    res.json(posts);
  } else if (req.method === "POST") {
    const { title, content, author } = req.body;
    const post = await db.collection("posts").insertOne({
      title,
      content,
      author,
      date: new Date(),
    });
    res.status(201).json(post);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
