import { Observable } from 'rxjs';
import { UseCase } from '../base/use-case';
import { UserModel } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetUsersUseCase implements UseCase<void, UserModel[]> {
    constructor(private userRepository: UserRepository) { }
    execute(): Observable<UserModel[]> {
        return this.userRepository.getUsers();
    }
}
