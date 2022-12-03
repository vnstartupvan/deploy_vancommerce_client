import axios from "axios";

export const fetchCollectionData = async (id) => {
  try {
    const url = `collections/${id}`;
    const response = await axios({
      method: "get",
      url,
      baseURL: process.env.REACT_APP_BASE_URL,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
