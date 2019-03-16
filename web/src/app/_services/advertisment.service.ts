import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvertismentService {

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

   getAdvertismentDetails(advertisment): Observable<any> {

    return this.http.post<any>(this.apiUrl + 'API/post/post-ad.php' , advertisment , this.requestOptions);
 }


 getAdvertismentByCategory(advertisment): Observable<any> {

  return this.http.post<any>(this.apiUrl + 'API/post/get-category-details.php' , advertisment , this.requestOptions);
}

getAdvertismentByEmail(email): Observable<any> {

  return this.http.post<any>(this.apiUrl + 'API/post/get-ad-details.php' , email , this.requestOptions);
}

}
