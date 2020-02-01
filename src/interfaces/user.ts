import { Observable } from 'rxjs';

export interface UserGrpcService {
  createUser(user: User): Observable<any>;
  getUser(param: SearchParam): Observable<any>;
  login(loginData: LoginData): Observable<any>;
}

export interface User {
  name?: string;
  surname?: string;
  secondname?: string;
  email: string;
  password?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface UserId {
  id: string;
}

export interface SearchParam {
  param: string;
}
