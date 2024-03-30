import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "../redux/userRedux";

const loginApi = (user) => axios.post("/api/auth/login", user);
const registerApi = (user) => axios.post("api/auth/register", user);

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  loginApi(user)
    .then(({ data }) => {
        console.log(data);
      dispatch(loginSuccess(data));
    })
    .catch((err) => dispatch(loginFailure()));
};
