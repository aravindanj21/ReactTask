import axios from "axios";

const API_URL = "https://dummyjson.com/products";

export const getProducts = async () => {
    try {
        const response = await axios.get(API_URL);

        return response.data?.products || [];
    }  catch (error) {
        throw new Error(
            error.response?.data?.message ||
            "Failed to fetch products"
        );
    }
};