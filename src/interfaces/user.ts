import { Observable } from 'rxjs';

export interface UserGrpcService {
  createUser(user: User): Observable<any>;
  getUser(user: UserId): Observable<any>;
}

export interface User {
  name: string;
  email: string;
  password: string;
}

export interface UserId {
  id: string;
}
