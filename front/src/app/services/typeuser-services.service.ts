import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeUser } from '../models/type-user';

@Injectable()
export class TypeuserServicesService {

  url: string = "http://localhost:8080/typeusers";


  constructor(private htpp: HttpClient) { }

/**
 * Save and create a Type User
 * @param tyuser 
 * @returns 
 */
  public savetype(tyuser: TypeUser) {
    return this.htpp.post<TypeUser[]>(this.url, tyuser, { responseType: 'text' as 'json' })
  }

/**
 * Find a Type User through the id
 * @param id 
 * @returns 
 */
  getTypeUser(id: number): Observable<TypeUser> {
    return this.htpp.get<TypeUser>(this.url + '/' + id);
  }

/**
 * Update a Type User through the id
 * @param typeuser 
 * @returns 
 */
  updateTypeUser(typeuser: TypeUser): Observable<TypeUser> {
    return this.htpp.put<TypeUser>(this.url + '/update/' + typeuser.typeid, typeuser)
  }

/**
 * Delete a Type User through the id
 * @param id 
 * @returns 
 */
  deleteTypeUser(id: number): Observable <any> {
    return this.htpp.delete<any>(this.url + '/delete/' + id);
  }


}
