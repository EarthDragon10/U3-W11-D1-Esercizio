import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  numberPostLiked: number = 0;
  userList: any[] = [];

  constructor(private userService: UserServiceService) {}

  ngOnInit(): void {
    this.userService.getUserJson().subscribe({
      next: (user) => (this.userList = user),
      error: (error) => console.error(error),
      complete: () => console.info('complete'),
    });
  }

  addLike(user: any) {
    this.userService.addLike(user).subscribe((resp) => console.log(resp));

    this.numberPostLiked++;
  }

  removeUser(id: number) {
    this.userService.removeUser(id).subscribe(
      (resp) => {
        this.userList = this.userList.filter((elem) => elem.id != id);
      },
      (error) => console.log(error)
    );
    // this.userList = this.userList.filter((elem) => elem.id !== id);
  }
}
