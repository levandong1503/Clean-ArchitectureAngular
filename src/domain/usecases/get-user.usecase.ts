import { Observable } from 'rxjs';
import { UseCase } from '../base/use-case';
import { UserModel } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';
export class GetUserUseCase implements UseCase<string, UserModel> {
    constructor(private userRepository: UserRepository) { }
    execute(userId: string): Observable<UserModel> {
        return this.userRepository.getUser(userId);
    }
}
