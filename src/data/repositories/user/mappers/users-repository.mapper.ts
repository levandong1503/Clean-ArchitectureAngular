import { Mapper } from 'src/base/utils/mapper';
import { UserModel } from 'src/domain/models/user.model';
import { UserEntity } from '../entities/user-entity';
export class UsersImplementationRepositoryMapper extends Mapper<UserEntity[], UserModel[]> {
    mapFrom(param: UserEntity[]): UserModel[] {
       let users: UserModel[] = [];
        for(let item of param){
            let mItem: UserModel = {
                id: item.id,
                fullName: item.name,
                username: item.userName,
                phoneNum: item.phoneNumber,
                profilePicture: item.userPicture,
                activationStatus: item.activationStatus
            }
            users.push(mItem);
            console.log(mItem);
            
        }
        return users;
    }
    mapTo(param: UserModel[]): UserEntity[] {
        let users: UserEntity[] = [];
        for(let item of param){
            let mItem: UserEntity = {
                id: item.id,
                name: item.fullName,
                userName: item.username,
                phoneNumber: item.phoneNum,
                userPicture: item.profilePicture,
                activationStatus: item.activationStatus
            }
            users.push(mItem);
        }
        return users;
    }
}