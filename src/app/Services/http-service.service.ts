import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  baseUrl='https://jsonplaceholder.typicode.com/'
  constructor(private http:HttpClient) { }
  // Get Data Method From API
  getData(url: string){
  return this.http.get(this.baseUrl+url);
  }
  getDataV1(url: string){
  return this.http.get(url);
  }
  // Post Data Method
  postData(url: string,payLoad: any){
   return this.http.post(this.baseUrl+url,payLoad);
  }
  // Update/Put Data Method
  updateData(url: string,payload:any){
    return this.http.put(this.baseUrl+url,payload)
  }
   // Delete Data method actually archiving method
   deleteData(url:string){
    return this.http.delete(this.baseUrl+url);
  }
}
