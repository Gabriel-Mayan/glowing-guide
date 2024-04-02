import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

export async function getRequest(url: string, config?: Readonly<AxiosRequestConfig>): Promise<AxiosResponse<any, any>> {
    return axios.get(url, config);
}

export async function postRequest(url: string, data?: any, config?: Readonly<AxiosRequestConfig>): Promise<AxiosResponse<any, any>> {
    return axios.post(url, data, config);
}

export async function putRequest(url: string, data?: any, config?: Readonly<AxiosRequestConfig>): Promise<AxiosResponse<any, any>> {
    return axios.put(url, data, config);
}

export async function patchRequest(url: string, data?: any, config?: Readonly<AxiosRequestConfig>): Promise<AxiosResponse<any, any>> {
    return axios.patch(url, data, config);
}

export async function deleteRequest(url: string, config?: Readonly<AxiosRequestConfig>): Promise<AxiosResponse<any, any>> {
    return axios.delete(url, config);
}
