import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { fetchNewToken } from "./refresh-auth";

interface RefreshTokenFailedRequest {
  response: {
    config: {
      headers: {
        Authorization: string;
      };
    };
  };
}

const api = process.env.NEXT_PUBLIC_BACKEND_API as string;

export const client = axios.create({
  baseURL: api,
});

export const setHeaderToken = (token: string): void => {
  client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const removeHeaderToken = (): void => {
  delete client.defaults.headers.common["Authorization"];
};

const refreshToken = async (
  failedRequest: RefreshTokenFailedRequest
): Promise<void> => {
  try {
    const newToken = await fetchNewToken(); // Call your refresh token API

    // Store the new token
    if (newToken) {
      setHeaderToken(newToken);
    }

    // Retry the failed request with the new token
    failedRequest.response.config.headers[
      "Authorization"
    ] = `Bearer ${newToken}`;

    return Promise.resolve();
  } catch (error) {
    removeHeaderToken();
    // Handle token refresh failure (e.g., logout or redirect)
    // Example: router.push('/login');
    return Promise.reject(
      error instanceof Error ? error : new Error("Token refresh failed")
    );
  }
};

// Attach the interceptor
createAuthRefreshInterceptor(client, refreshToken, {
  statusCodes: [401],
  pauseInstanceWhileRefreshing: true,
});

// Generic request function
export const request = <T>(
  options: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  client.defaults.withCredentials = true;
  return client(options);
};
