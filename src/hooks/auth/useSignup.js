import { authService } from "../../services";
import Cookies from "js-cookie";

export const useSignup = () => {
  const signup = async (username, companyname, email, password) => {
    const user = await authService.signup(username, companyname, email, password);
    if (user) {
      Cookies.set("currentUser", JSON.stringify(user));
    }
    return user;
  };

  return { signup };
};