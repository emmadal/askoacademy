const API_URL = "http://tenant.devlabcenter.com/api/v1";

export const registerUser = (params) => {
  return new Promise((resolve, reject) => {
    const data = {
      first_name: params.firstname,
      last_name: params.lastname,
      password: params.password,
      email: params.email,
      user_mobile_1: params.phone_number,
      user_type: params.user_type,
      password_confirmation: params.confirm_pass,
    };
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data }),
      redirect: 'follow',
    };
    fetch(`${API_URL}/register`, config)
      .then((response) => response.json())
      .then((e) => resolve(e))
      .catch((err) => reject(err));
  });
};

export const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    const data = {email, password}
    const params = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data }),
      redirect: "follow",
    };
    fetch(`${API_URL}/login`, params)
      .then((response) => response.json())
      .then((e) => resolve(e))
      .catch((err) => reject(err.message));
  });
};

export const resetPassword = () => {
  return new Promise((resolve, reject) => {});
};

export const logOut = () => {
  return new Promise((resolve, reject) => {});
};

export const getCourses = () => {
  return new Promise((resolve, reject) => {});
};
