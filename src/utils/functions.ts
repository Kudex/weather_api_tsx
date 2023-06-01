import { TOKEN_LOCAL_STORAGE_KEY } from "./constants";

export const setTokenDataToStore=({token, host}:{
    token:string,
    host:string;
})=>{
    const dataToSet = {token,host};
    localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, JSON.stringify(dataToSet));
};

export const getTokenStorageData=()=>{
const data=localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY) as any;
return JSON.parse(data);
};