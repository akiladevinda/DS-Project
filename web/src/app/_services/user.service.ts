import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl;
  private requestOptions;

  constructor(private http: HttpClient) {

    this.requestOptions = new RequestOptions();
    this.requestOptions.withCredentials = true;
    this.requestOptions = {
      headers: new HttpHeaders({
      }),
      responseType: 'json',
    };
   }

   getUserDetails(user): Observable<any> {

    return this.http.post<any>(this.apiUrl + 'API/post/user-detail-second.php'  , user , this.requestOptions);
 }



 registerUser(register): Observable<any> {

  return this.http.post<any>(this.apiUrl + 'API/post/register.php'  , register , this.requestOptions);
}




}
