import axios, { AxiosRequestConfig, RawAxiosRequestHeaders } from "axios";
import { parseLinkHeader } from "utils/network";

interface CallOptions {
  path: string;
  paginated?: boolean;
  params?: any;
  body?: { [key: string]: any };
  headers?: RawAxiosRequestHeaders;
  data?: any;
  options?: AxiosRequestConfig;
}

const call =
  (method: string) =>
  async ({ path, paginated, params, body, headers, data, options }: CallOptions) => {
    const url = `${import.meta.env.VITE_API_URL}${path}`;

    const config: AxiosRequestConfig = {
      ...options,
      method: method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    };

    if (data) {
      config.data = data;
    } else if (body && ["PUT", "POST", "PATCH"].includes(method)) {
      config.data = JSON.stringify(body);
    }

    if (params) {
      config.params = params;
    }

    return await axios(url, config)
      .then(({ data, headers }) => {
        if (paginated) {
          return { data, pagination: headers.link && parseLinkHeader(headers.link) };
        }

        return data;
      })
      .catch((error) => {
        throw error;
      });
  };

export default {
  get: call("GET"),
  post: call("POST"),
  put: call("PUT"),
  patch: call("PATCH"),
  delete: call("DELETE"),
};
