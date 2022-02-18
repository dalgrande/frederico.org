import axios from "axios";
export const fetchData = async (query) => {
    const result = await axios(
        `https://jsonplaceholder.typicode.com/${query}`
    );
    return result;
};