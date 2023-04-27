import axios from "axios"



axios.defaults.baseURL="http://air-quality.p.rapidapi.com";

const instance = axios.create({
    baseURL: "http://air-quality.p.rapidapi.com",
});

instance.get("/history/airquality");