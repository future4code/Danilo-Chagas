import axios, { AxiosRequestConfig } from "axios"

export default async function getImage(size: number = 200, path: string): Promise<any> {
    let config: AxiosRequestConfig = {
        method: "GET",
        url: `https://image.tmdb.org/t/p/w${size}${path}`,
        headers: {}
    }
    try {
        const res = await axios(config)
        return res;
    } catch (error) {
        return error;
    }
}
