import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DATABASE);

       const data = await db
           .collection(process.env.MONGODB_COLLECTION)
           .find({})
           .toArray();

       res.json(data);
    } catch (e) {
        console.error(e);
        res.status(500).json({});
    }
 };
 