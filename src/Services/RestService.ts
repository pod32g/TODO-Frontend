import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class RestService {

    http: AxiosInstance

    constructor(config?: AxiosRequestConfig) {
        console.log('[BACKEND_URL]', process.env.REACT_APP_BACKEND_URL)
        this.http = axios.create({
            ...config,
            baseURL: `${process.env.REACT_APP_BACKEND_URL}/api/`
        })
    }

    GET(uri: string, params?: any) {
        return this.http.get(uri, {
            params: params
        })
    }

    POST(uri: string, payload: any) {
        return this.http.post(uri, payload)
    }

    PUT(uri: string, payload: any) {
        return this.http.put(uri, payload)
    }

    DELETE(uri: string, params: any) {
        return this.http.delete(uri, {
            params: params
        })
    }
}

export default RestService