import { TOKEN_LOCAL_STORAGE_KEY } from "./constants";

export const setTokenDataToStore=({token, host})=>{
    const dataToSet = {token,host};
    localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, JSON.stringify(dataToSet));
};

export const getTokenStorageData=()=>{
const data=localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY);
return JSON.parse(data);
};