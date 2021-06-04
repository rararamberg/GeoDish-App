import api from "./apiConfig";

export const getDishes = async () => {
  try {
    const response = await api.get("/dishes");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDish = async (id) => {
  try {
    const response = await api.get(`/dishes/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createDish = async (dish) => {
  try {
    const response = await api.post("/dishes", dish);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateDish = async (id, dish) => {
  try {
    const response = await api.put(`/dishes/${id}`, dish);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteDish = async (id) => {
  try {
    const response = await api.delete(`/dishes/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
