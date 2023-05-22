import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("Curriculum");

       const data = await db
           .collection("CurriculumData")
           .find({})
           .toArray();

       res.json(data);
    } catch (e) {
        console.error(e);
        res.status(200).json({});
    }
 };
 