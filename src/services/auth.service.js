import axios from "axios";

import { getAuthorizationHeader } from "@/utils/getAuthorizationHeader";

export class AuthService {
  constructor(url) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 30000,
      timeoutErrorMessage: "Time out!",
    });
  }

  login = (email, password) => {
    return this.instance
      .post("/login", {
        emailAddress: email,
        password: password,
      })
      .then((res) => {
        // return {
        //   username: res.data.username,
        //   avatar: res.data.avatar,
        //   id: res.data.userId,
        //   accessToken: res.data.access_token,
        //   expiredAt: res.data.expiredAt,
        // };
        return res.data;
      });
  };

  signup = (userName, companyName, emailAddress, password) => {
    return this.instance
      .post("/signup", {
        userName: userName,
        companyName: companyName,
        emailAddress: emailAddress,
        password: password,
        confirmPassword: password,
      })
      .then((res) => {
        // return {
        //   username: res.data.username,
        //   avatar: res.data.avatar,
        //   id: res.data.userId,
        //   accessToken: res.data.access_token,
        //   expiredAt: res.data.expiredAt,
        // }
        return res.data;
      });
  };

  getCurrentUser = (userId) => {
    return this.instance
      .get(`/users/${userId}`, {
        headers: getAuthorizationHeader(),
      })
      .then((res) => {
        return res.data;
      });
  };

  uploadAvatar = (userId, newAvatar) => {
    const formData = new FormData();
    formData.append("file", newAvatar);
    return this.instance
      .post(`/users/${userId}/upload`, formData, {
        headers: getAuthorizationHeader(),
      })
      .then((res) => {
        return {
          newAvatar: res.data.data.url,
        };
      });
  };
}
