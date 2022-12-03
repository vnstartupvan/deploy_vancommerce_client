import axios from "axios";

export const fetchCollectionData = async (id) => {
  try {
    const url = `collections/${id}`;
    const response = await axios({
      method: "get",
      url,
      baseURL: 'https://vancommerceservces.onrender.com',
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
