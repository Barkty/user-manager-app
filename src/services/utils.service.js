import API from 'utils/Axios';

export const getHome = async () => {
  try {
    const res = await API.get(`/`);

    return res;
  } catch (e) {
    throw e?.response?.data;
  }
};

export const signIn = async (data) => {
  try {
    const res = await API.post(`/auth/signin`, data);

    return res.data;
  } catch (e) {
    throw e?.response?.data;
  }
};

export const signOut = async () => {
  try {
    const res = await API.get(`/auth/signout`);

    return res.data;
  } catch (e) {
    throw e?.response?.data;
  }
};
