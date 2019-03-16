import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  private apiUrl = environment.apiUrl;
  private httpOptions;

   constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'json',
    };
   }

    loginUser(user: any) {
    return this.http.post(this.apiUrl + '/API/post/create.php', user, this.httpOptions);
   }

}
