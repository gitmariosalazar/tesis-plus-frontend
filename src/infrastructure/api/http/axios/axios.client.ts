import { ApiResponse } from '@/shared/api/response/ApiResponse';
import { HttpClientInterface } from '../../interface/http.client.interface';
import axios, { AxiosResponse } from 'axios';
import { localStorageService } from '@/infrastructure/storage/localStorageService';
import { env } from '@/infrastructure/config/env';

export class AxiosHttpClient implements HttpClientInterface {
  private axiosInstance = axios.create();
  private unauthorizedHandler?: (error: any) => Promise<void>;

  constructor() {
    console.log(`AxiosHttpClient initialized with API URL: ${env.API_URL}`);
    // Configurar interceptor de respuesta
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 401 && this.unauthorizedHandler) {
          try {
            await this.unauthorizedHandler(error);
          } catch (handlerError) {
            console.error('Error in unauthorized handler:', handlerError);
          }
        }
        return Promise.reject(error);
      }
    );
  }

  setUnauthorizedHandler(handler: (error: any) => Promise<void>) {
    this.unauthorizedHandler = handler;
  }

  async request<T>(
    method: string,
    url: string,
    body?: unknown,
    options: Record<string, any> = {}
  ): Promise<ApiResponse<T>> {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...((options.headers as Record<string, any>) || {}),
    };

    try {
      const response: AxiosResponse<T> = await this.axiosInstance.request({
        ...options,
        method: method.toUpperCase(),
        url: `${env.API_URL}${url}`,
        headers,
        data: body,
        withCredentials: true,
      });

      return {
        status_code: response.status,
        time: new Date(),
        message: ['Request successful'],
        url: `${env.API_URL}${url}`,
        data: response.data,
      };
    } catch (error: any) {
      if (error.response?.status === 401) {
        localStorageService.removeItem('token');
      }
      if (error.name === 'AbortError') {
        throw new Error('Request was aborted');
      }
      throw new Error(error.response?.data?.message || error.message);
    }
  }

  async get<T>(
    url: string,
    options: Record<string, any> = {}
  ): Promise<ApiResponse<T>> {
    return this.request<T>('GET', url, undefined, options);
  }

  async post<T>(
    url: string,
    body?: unknown,
    options: Record<string, any> = {}
  ): Promise<ApiResponse<T>> {
    return this.request<T>('POST', url, body, options);
  }

  async put<T>(
    url: string,
    body?: unknown,
    options: Record<string, any> = {}
  ): Promise<ApiResponse<T>> {
    return this.request<T>('PUT', url, body, options);
  }

  async delete<T>(
    url: string,
    options: Record<string, any> = {}
  ): Promise<ApiResponse<T>> {
    return this.request<T>('DELETE', url, undefined, options);
  }

  async patch<T>(
    url: string,
    body?: unknown,
    options: Record<string, any> = {}
  ): Promise<ApiResponse<T>> {
    return this.request<T>('PATCH', url, body, options);
  }
}
