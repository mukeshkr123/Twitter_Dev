import UserService from "../services/user-service.js";

const userService = new UserService();

// create user
export const SignUp = async (req, res) => {
  try {
    const response = await userService.signUp({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    });

    return res.status(201).json({
      message: "User successfully signed up",
      data: response,
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      data: {},
      success: false,
      err: error,
    });
  }
};

// login
export const login = async (req, res) => {
  try {
    const token = await userService.signin(req.body);
    return res.status(200).json({
      success: true,
      message: "Successfully logged in",
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      data: {},
      success: false,
      err: error,
    });
  }
};
