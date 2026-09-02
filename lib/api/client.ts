export class ApiError extends Error {
  constructor(
    public message: string,
    public status?: number,
    public data?: any
  ) {
    super(message);
    this.name = "ApiError";
  }
}

import { Interceptor, RequestConfig, ResponseInterceptor } from "@/types/api.types";

class ApiClient {
  private baseURL: string;
  private defaultHeaders: HeadersInit;
  private requestInterceptors: Interceptor[] = [];
  private responseInterceptors: ResponseInterceptor[] = [];

  constructor(baseURL: string = "", defaultHeaders: HeadersInit = {}) {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      "Content-Type": "application/json",
      ...defaultHeaders,
    };
  }

  public addRequestInterceptor(interceptor: Interceptor) {
    this.requestInterceptors.push(interceptor);
  }

  public addResponseInterceptor(interceptor: ResponseInterceptor) {
    this.responseInterceptors.push(interceptor);
  }

  private async sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private async fetchWithRetry(url: string, config: RequestConfig, retries: number): Promise<Response> {
    try {
      const response = await fetch(url, config);
      if (!response.ok && response.status >= 500 && retries > 0) {
        await this.sleep(1000);
        return this.fetchWithRetry(url, config, retries - 1);
      }
      return response;
    } catch (error) {
      if (retries > 0) {
        await this.sleep(1000);
        return this.fetchWithRetry(url, config, retries - 1);
      }
      throw error;
    }
  }

  public async request<T>(endpoint: string, config: RequestConfig = {}): Promise<T> {
    let finalConfig: RequestConfig = {
      ...config,
      headers: { ...this.defaultHeaders, ...config.headers },
    };

    for (const interceptor of this.requestInterceptors) {
      finalConfig = await interceptor(finalConfig);
    }

    const { params, baseURL, retries = 0, ...fetchOptions } = finalConfig;
    const base = baseURL !== undefined ? baseURL : this.baseURL;
    let url = base ? `${base}${endpoint}` : endpoint;

    if (params) {
      const searchParams = new URLSearchParams(params);
      url += `?${searchParams.toString()}`;
    }

    let response = await this.fetchWithRetry(url, fetchOptions, retries);

    for (const interceptor of this.responseInterceptors) {
      response = await interceptor(response);
    }

    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch {
        errorData = await response.text();
      }
      throw new ApiError(
        errorData?.message || errorData?.error || "An unexpected error occurred",
        response.status,
        errorData
      );
    }

    if (response.status === 204) {
      return {} as T;
    }

    return response.json() as Promise<T>;
  }

  public get<T>(endpoint: string, config?: Omit<RequestConfig, "method" | "body">) {
    return this.request<T>(endpoint, { ...config, method: "GET" });
  }

  public post<T>(endpoint: string, data?: any, config?: Omit<RequestConfig, "method" | "body">) {
    return this.request<T>(endpoint, {
      ...config,
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  public put<T>(endpoint: string, data?: any, config?: Omit<RequestConfig, "method" | "body">) {
    return this.request<T>(endpoint, {
      ...config,
      method: "PUT",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  public delete<T>(endpoint: string, config?: Omit<RequestConfig, "method" | "body">) {
    return this.request<T>(endpoint, { ...config, method: "DELETE" });
  }
}

export const apiClient = new ApiClient();
