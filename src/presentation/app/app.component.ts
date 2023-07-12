import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { GetUserUseCase } from 'src/domain/usecases/get-user.usecase';
import { GetUsersUseCase } from 'src/domain/usecases/get-users.usecase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CleanArchitecture';
  userList:any;
  constructor(){
    // private userService: GetUsersUseCase
    // this.userService.execute().subscribe(res => {
    //   this.userList = res;
    // });
  }
  
}
