import { Component } from '@angular/core';
import { TypeUser } from 'src/app/models/type-user';
import { TypeuserServicesService } from 'src/app/services/typeuser-services.service';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-typeuser-list',
  templateUrl: './typeuser-list.component.html',
  styleUrls: ['./typeuser-list.component.css']
})
export class TypeuserListComponent {

  typeusers: TypeUser[] = [];


  constructor(private userService: UserServicesService, private typeUserService: TypeuserServicesService) { }

  /**
   * Method to find all the Type Users when the page is loaded
   */
  ngOnInit() {
    this.userService.getAllTypeUsers().subscribe(data => this.typeusers = data)
  }

  /**
   * Delete a user type. In order to perform this, there has to be no Users with a Type User register, otherwise it would create a User with a Type User null.
   * @param typeid 
   */
  deleteTypeUser(typeid: number) {
    this.typeUserService.deleteTypeUser(typeid).subscribe(responde => {
      this.typeusers = this.typeusers.filter(typeusers => typeusers.typeid != typeid);
    });
  }


}
