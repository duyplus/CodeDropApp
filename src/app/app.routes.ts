import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { UserComponent } from './user/user.component';
// import { SourceComponent } from './source/source.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home by default
//   { path: 'home', component: HomeComponent },
//   { path: 'user', component: UserComponent },
//   { path: 'source', component: SourceComponent },
  { path: '**', redirectTo: '/home' }, // Wildcard route for a 404 page or redirect
];