import jwt from "jsonwebtoken";
const generatejwttokens = async (userid, email) => {
  try {
    const token = await jwt.sign({ userid, email }, process.env.JWT_SECRET, {
      expiresIn: "15h",
    });

    if (!token) {
      throw new Error("Token generation failed");
    }
    return token;
  } catch (error) {
    return "SomeThing Went Wrong";
  }
};
export { generatejwttokens };
