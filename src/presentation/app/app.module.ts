import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { UserImplementationRepository } from 'src/data/repositories/user/user-implementation.repository';
import { DataModule } from 'src/data/data.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
