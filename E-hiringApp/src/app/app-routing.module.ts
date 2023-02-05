import { RegisterComponent } from './register/register.component';
import { ForbiddenComponent } from './_auth/forbidden/forbidden.component';
import { AuthGuard } from './_auth/auth.guard';
import { UserPageComponent } from './user-page/user-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ { path: 'candidates', component: CandidateListComponent },
{path:'createCandidate',component:CandidateFormComponent},
{path:'createClient',component:ClientFormComponent},
{path:'upload-File',component:UploadFileComponent},
{path:'login',component:LoginComponent},
{path:'home',component:HomeComponent},
{path:"navbar",component:NavbarComponent},
{path:"adminPage",component:AdminPageComponent,canActivate:[AuthGuard],data:{roles:['ADMIN']}},
{path:"userPage",component:UserPageComponent,canActivate:[AuthGuard],data:{roles:['USER']}},
{path:"forbidden",component:ForbiddenComponent},
{path:"register",component:RegisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
