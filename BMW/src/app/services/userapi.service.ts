import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UserapiService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.apiUrl}/${id}`);
  }

  addUser(user: Users): Observable<Users> {
    return this.http.post<Users>(this.apiUrl, user);
  }

  login(email: string, password: string): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.apiUrl}?email=${email}&password=${password}`);
  }
}
