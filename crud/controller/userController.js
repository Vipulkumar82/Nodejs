import { userModel } from "../model/user.js";

export async function createUser(req, res) {
  try {
    const body = req.body;
    if (!body || !body.name || !body.password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    const { name, password, email } = body;

    const user = await new userModel({
      name,
      password,
      email,
    }).save();
   
    return res.status(200).json({
      message: "New User Created Succefully",
    });
  } catch (error) {
    return res.status(500).json({
        message:`Error ${error.message}`
    })
  }
}
