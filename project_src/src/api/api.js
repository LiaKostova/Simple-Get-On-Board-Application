//requests

import { getUserData } from "../utils.js";
let host =  "http://localhost:3030";

async function request(method, url, data){

    let options = {
        method,
        headers: {},
    }

    if(data){
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }

    //for authorization requests
    let user = getUserData();
    if(user){
        options.headers[X-Authorization] = user.accessToken;
    }
    
    try{
        let finalUrl = host + url;

        const response = await fetch(finalUrl, options)
       
        if(!response.ok){
            const err = await response.json();
            throw new Error(err.message);
        }
        return response.json()


    }catch(err){
        alert(err.message);
        throw err;
    }

}

export const get = request.bind(null, "GET");
export const put = request.bind(null, "PUT");
export const post = request.bind(null, "POST");
export const del = request.bind(null, "DELETE");