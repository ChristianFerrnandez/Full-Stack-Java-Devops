import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeUser } from 'src/app/models/type-user';
import { User } from 'src/app/models/user';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user!: User;

  typeusers: TypeUser[] = [];


  constructor(private route: ActivatedRoute, private router: Router, private userService: UserServicesService) {
    this.user = new User();
  }

  /**
   * Method to Submit the Form when you create a new User
   */
  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList())
  }

  /**
   * Method to go to the Users List
   */
  gotoUserList() {
    this.router.navigate(['/users'])
  }


  /**
   * First part search for the User ID to load the UserForm with the id founded.
   * Second part finds all Type Users to display in the form
   */
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id: number = params['id'];
      if (id) {
        this.userService.getUser(id).subscribe(response => this.user = response);
      }
    })

    this.userService.getAllTypeUsers().subscribe(data => this.typeusers = data);
  }


  /**
   * Method to Update a User and go back to the User List
   */
  updateUser() {
    this.userService.updateUser(this.user).subscribe(response => this.gotoUserList());
  }

  /**
   * Method to compare types users to perform the Edit User and show the Types Users available
   * @param o1 
   * @param o2 
   * @returns 
   */
  compareTypes(o1: TypeUser, o2: TypeUser): boolean {
    if (o1 === undefined && o2 === undefined) return true;
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false : o1.typeid == o2.typeid
  }

}
