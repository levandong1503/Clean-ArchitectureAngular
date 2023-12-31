import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserEntity } from './entities/user-entity';
import { UserImplementationRepositoryMapper } from './mappers/user-repository.mapper';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { UserModel } from 'src/domain/models/user.model';
import { UsersImplementationRepositoryMapper } from './mappers/users-repository.mapper';
@Injectable({
    providedIn: 'root',
}
)
export class UserImplementationRepository extends UserRepository {
    userMapper = new UserImplementationRepositoryMapper();
    usersMapper = new UsersImplementationRepositoryMapper();
    constructor(private http: HttpClient) {
        super();
    }
    login(params: {username: string, password: string}): Observable<UserModel> {
        return this.http
            .post<UserEntity>('https://634e2246b8ce95a1dd7f445e.mockapi.io/api/login', {params})
            .pipe(map(this.userMapper.mapFrom));
    }
    register(params: {phoneNum: string, password: string}): Observable<UserModel> {
       return this.http
            .post<UserEntity>('https://example.com/register', {params})
            .pipe(map(this.userMapper.mapFrom));
    }
    getUserProfile(): Observable<UserModel>{
        return this.http.get<UserEntity>('https://example.com/user').pipe(
            map(this.userMapper.mapFrom));
    }

    getUser(userId: string): Observable<UserModel> {
        return this.http.get<UserEntity>(`https://634e2246b8ce95a1dd7f445e.mockapi.io/api/${userId}`).pipe(
            map(this.userMapper.mapFrom));
    }

    getUsers(): Observable<UserModel[]> {
        return this.http.get<UserEntity[]>(`https://634e2246b8ce95a1dd7f445e.mockapi.io/api/user`).pipe(
            map(this.usersMapper.mapFrom));
    }
}