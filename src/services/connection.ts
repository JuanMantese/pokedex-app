import { Injectable } from '@angular/core';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class MyApiService {
  private apiUrl = 'https://pokedex-juan-mantese-341d2c65270b.herokuapp.com' || 'http://localhost:3000';

  async request(method: string, url: string, data?: any): Promise<any> {
    const config: AxiosRequestConfig = {
      method,
      url: `${this.apiUrl}/${url}`,
      data,
    };

    try {
      const response: AxiosResponse = await axios(config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  get(url: string): Promise<any> {
    return this.request('get', url);
  }

  post(url: string, data: any): Promise<any> {
    return this.request('post', url, data);
  }

  put(url: string, data?: any): Promise<any> {
    return this.request('put', url, data);
  }

  delete(url: string): Promise<any> {
    return this.request('delete', url);
  }

}
