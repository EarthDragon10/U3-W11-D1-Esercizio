import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private urlAPI: string = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private http: HttpClient) {}

  getUserJson(): Observable<IUser[]> {
    console.log(this.http.get<IUser[]>(this.urlAPI));

    return this.http.get<any>(this.urlAPI);
  }

  getUserById(id: number): Observable<IUser> {
    return this.http.get<IUser>(this.urlAPI + id);
  }

  addLike(user: IUser): Observable<IUser> {
    console.log('user', user);

    return this.http.post<IUser>(this.urlAPI, user);
  }

  removeUser(id: number) {
    return this.http.delete<IUser>(this.urlAPI + id);
  }
}
