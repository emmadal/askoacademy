const API_URL = "http://tenant.devlabcenter.com/api/v1";

export const registerUser = (data) => {
  return new Promise((resolve, reject) => {
    const params = {
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data }),
    };
    fetch(`${API_URL}/users/register`, params)
      .then((response) => response.json())
      .then((e) => resolve(e))
      .catch((err) => reject(err));
  });
};

export const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    const data = {email, password}
    const params = {
      mode: 'cors',
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data }),
    };
    fetch(`${API_URL}/users/login`, params)
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
