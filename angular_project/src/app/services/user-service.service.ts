import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  userServiceList: any[] = [];
  userLikedServiceList: any[] = [];
  userRemovedServiceList: any[] = [];

  private urlAPI: string = 'https://jsonplaceholder.typicode.com/users/';

  userLikedList: any[] = [];
  constructor(private http: HttpClient) {}

  getUserJson() {
    console.log(this.http.get<any>(this.urlAPI));

    return this.http.get<any>(this.urlAPI);
  }

  addLike(user: any) {
    console.log('user', user);
    console.log('userServiceList', this.userServiceList);
    this.http.post(this.urlAPI, user);

    this.userLikedServiceList.push(user);

    console.log('userLikedServiceList', this.userLikedServiceList);
    return this.http.post(this.urlAPI, user);
  }
}
