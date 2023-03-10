import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeUser } from 'src/app/models/type-user';
import { TypeuserServicesService } from 'src/app/services/typeuser-services.service';

@Component({
  selector: 'app-typeuser-form',
  templateUrl: './typeuser-form.component.html',
  styleUrls: ['./typeuser-form.component.css']
})
export class TypeuserFormComponent {

  typeuser!: TypeUser;

  constructor(private route: ActivatedRoute, private router: Router, private typeuserservice: TypeuserServicesService) {
    this.typeuser = new TypeUser();
  }

  /**
   * Method to submit the form when a new Type User is created.
   */
  onSubmitType() {
    this.typeuserservice.savetype(this.typeuser).subscribe(result => this.gotoTypeUserList())
  }


  /**
   *  Searchs for the TypeUser ID to load the TypeUser Form with the id founded.
   */
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id: number = params['id'];
      if (id) {
        this.typeuserservice.getTypeUser(id).subscribe(response => this.typeuser = response);
      }
    })
  }


  /**
   * Method to update the Type User and go back to the Type User list page
   */
  updateTypeUser() {
    this.typeuserservice.updateTypeUser(this.typeuser).subscribe(response => this.gotoTypeUserList());
  }

  /**
   * Method to go to the Type User list page
   */
  gotoTypeUserList() {
    this.router.navigate(['/typeusers'])
  }
}
