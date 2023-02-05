import { UserService } from './user.service';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { AuthGuard } from './_auth/auth.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { UpdateCandidateComponent } from './update-candidate/update-candidate.component';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ForbiddenComponent } from './_auth/forbidden/forbidden.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    CandidateListComponent,
    UpdateCandidateComponent,
    CandidateFormComponent,
    ClientFormComponent,
    UploadFileComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    AdminPageComponent,
    UserPageComponent,
    ForbiddenComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule
  ],
  providers: [AuthGuard,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  },
UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
