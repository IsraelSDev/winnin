import axios from "axios";

const buildApiUrl = (type: number, after: string = "") => {


    let typeFiltered = "";
    let URL_API = "";
    const HOT = "hot";
    const NEW = "new";
    const RISING = "rising";
    const PRE_API =
        process.env.REACT_APP_API_URL || "environment PRE_API not found";
    const END_API_INITIAL =
        process.env.REACT_APP_END_URL_INITIAL || "environment END_API_INITIAL not found";
    const END_API_PAGINATED =
        process.env.REACT_APP_END_URL_PAGINATED ||
        "environment END_API_PAGINATED not found";

    if (type === 1) {
        typeFiltered = HOT;
    } else if (type === 2) {
        typeFiltered = NEW;
    } else {
        typeFiltered = RISING;
    }

    if (after.length <= 0) {
        URL_API = PRE_API + typeFiltered + END_API_INITIAL;
    } else {
        URL_API = PRE_API + typeFiltered + END_API_PAGINATED + after;
    }

    return URL_API;
};

const getHotPost = async (after: string = "") => {
    const response = await axios.get(buildApiUrl(1, after ?? ""));
    return response.data;
};

const getNewPost = async (after: string = "") => {
    const response = await axios.get(buildApiUrl(2, after ?? ""));
    return response.data;
};

const getRisingPost = async (after: string = "") => {
    const response = await axios.get(buildApiUrl(3, after ?? ""));
    return response.data;
};

export { getNewPost, getHotPost, getRisingPost };
