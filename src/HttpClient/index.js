import axios from "axios";
import mockHttpClient from "./mockHttpClient";

const isMockEnabled = true;

const clientApi = () => {
  return axios.create({
    baseURL: "/store",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest"
    },
    xsrfCookieName: "CSRF_TOKEN",
    xsrfHeaderName: "X-CSRF-TOKEN"
  });
};

const createHttpClient = () => {
  const storeClient = clientApi();

  if (isMockEnabled) {
    return mockHttpClient(storeClient);
  }

  return storeClient;
};

export default createHttpClient;
