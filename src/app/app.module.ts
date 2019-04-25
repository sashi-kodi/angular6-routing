import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsDetailComponent } from './students-detail/students-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsListComponent,
    StudentsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
