import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeUser } from '../models/type-user';
import { User } from '../models/user';

@Injectable()
export class UserServicesService {

  url: string = "http://localhost:8080/users";


  constructor(private htpp: HttpClient) { }
  
  /**
   * Finds all Users
   * @returns 
   */
  getAllUsers(): Observable<User[]> {
    return this.htpp.get<User[]>(this.url)
  }

  /**
   * Save and create the User
   * @param user 
   * @returns 
   */
  public save(user: User) {
    return this.htpp.post<User[]>(this.url, user, { responseType: 'text' as 'json' })
  }

  /**
   * Find all User Types
   * @returns 
   */
  getAllTypeUsers(): Observable<TypeUser[]> {
    return this.htpp.get<TypeUser[]>(this.url + '/adduser')
  }

  /**
   * Find a User through the id
   * @param id 
   * @returns 
   */
  getUser(id: number): Observable<User> {
    return this.htpp.get<User>(this.url + '/' + id);
  }

  /**
   * Update a User through the id
   * @param user 
   * @returns 
   */
  updateUser(user: User): Observable<User> {
    return this.htpp.put<User>(this.url + '/update/' + user.id, user)
  }

  /**
   * Delete a User through the id
   * @param id 
   * @returns 
   */

  deleteUser(id: number): Observable<any> {
    return this.htpp.delete<any>(this.url + '/delete/' + id);
  }

}
