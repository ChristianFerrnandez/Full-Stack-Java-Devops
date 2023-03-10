import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserServicesService } from 'src/app/services/user-services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  sortedData: User[]=[];

  constructor(private userService: UserServicesService) { 
    this.sortedData = this.users.slice();
  }

  /**
   * Find all Users
   */
  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => this.users = data)
  }


  /**
   * Method to delete a User through the ID
   * @param id 
   */
  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(responde => {
      this.users = this.users.filter(user => user.id != id);
    });
  }

}
