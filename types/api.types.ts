export interface RequestConfig extends RequestInit {
  params?: Record<string, string>;
  baseURL?: string;
  retries?: number;
}

export type Interceptor = (config: RequestConfig) => RequestConfig | Promise<RequestConfig>;
export type ResponseInterceptor = (response: Response) => Response | Promise<Response>;
