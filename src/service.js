import axios from "axios";

import createStoreClient from "./HttpClient";

const httpClient = createStoreClient();

export const fetchClientList = (config) => {
  return httpClient
    .post("/api/clients", config)
    .catch(handleRequestCancellation)
    .then((response) => {
      if (response) {
        return response.data;
      }
    });
};

function handleRequestCancellation(error) {
  if (axios.isCancel(error)) {
    console.log("Request canceled", error.message);
  } else {
    throw error;
  }
}
