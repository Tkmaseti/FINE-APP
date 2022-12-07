import { ChatsComponent } from './components/chats/chats.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/patient/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'posts', component:PostsComponent},
  {path: 'search', component:SearchComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'user', component:HomeComponent},
  {path: 'new', component:NewPostComponent},
  {path: "chats", component:ChatsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
