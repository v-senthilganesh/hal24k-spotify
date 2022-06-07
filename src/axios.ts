import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import config from "./config";

const axiosConfig: AxiosRequestConfig = {
  baseURL: config.api.baseUrl,
};

const spotifyAPI: AxiosInstance = axios.create(axiosConfig);

spotifyAPI.interceptors.request.use(
  async (configuration: AxiosRequestConfig) => {
    const { authUrl, clientId, clientSecret } = config.api;

    const accessToken = localStorage.getItem("accessToken");
    if (!configuration.headers) {
      configuration.headers = {};
    }
    //checking if accessToken exists
    if (accessToken) {
      configuration.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      const response = await axios.post(
        authUrl,
        "grant_type=client_credentials",
        {
          headers: {
            Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (!configuration.headers) {
        configuration.headers = {};
      }
      localStorage.setItem("accessToken", response.data.access_token);
      configuration.headers.Authorization = `Bearer ${response.data.access_token}`;
    }

    return configuration;
  }
);

export default spotifyAPI;
