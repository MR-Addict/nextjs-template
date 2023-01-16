import clientPromise from "./clientPromise";

class Mongodb {
  async checkuser(username: string, password: string) {
    try {
      const client = await clientPromise;
      const db = client.db("user");

      const user = await db
        .collection("user")
        .aggregate([
          { $match: { username, password } },
          { $addFields: { _id: { $convert: { input: "$_id", to: "string" } } } },
        ])
        .next();

      if (!user) return { status: false, message: "Username or Password incorrect!" };
      return { status: true, data: user };
    } catch (error) {
      console.error(error);
      return { status: false, message: "Cannot establish connection with mongodb!" };
    }
  }
}

export default Mongodb;
