import axios from "axios";

export const startAttack = async (useNmap, useAshok, useRipe, useWappalyzer, useWaf00f, targetUrl) => {

    const body = {useNmap, useAshok, useRipe, useWappalyzer, useWaf00f, targetUrl};
    console.log(body)
    const request = await axios.post("http://127.0.0.1:5000/post", body)
    console.log(request.data)
    return request.data
}