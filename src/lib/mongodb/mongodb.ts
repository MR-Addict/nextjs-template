import { compare } from "bcryptjs";

import clientPromise from "./clientPromise";

class Mongodb {
  async checkuser(username: string, password: string) {
    try {
      const client = await clientPromise;
      const db = client.db("user");

      const user = await db
        .collection("user")
        .aggregate([{ $match: { username } }, { $addFields: { _id: { $convert: { input: "$_id", to: "string" } } } }])
        .next();

      if (!user) return { status: false, message: "User not exists" };

      const isMatched = await compare(password, user.password);
      if (!isMatched) return { status: false, message: "Password incorrect!" };

      delete user.password;
      return { status: true, data: user };
    } catch (error) {
      console.error(error);
      return { status: false, message: "Error occurred while communicate with mongodb!" };
    }
  }
}

export default Mongodb;
