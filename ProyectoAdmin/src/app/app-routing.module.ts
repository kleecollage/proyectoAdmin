import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckLoginGuard } from '@shared/guards/check-login.guard';

import { TasksComponent } from "./shared/components/tasks/tasks.component";
import { PrivateTasksComponent } from "./shared/components/private-tasks/private-tasks.component";
import { SignupComponent } from "./shared/components/signup/signup.component" ;


const routes: Routes = [
  
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full' ,
  },
  
  {
    path: 'home',
    loadChildren: () =>
    import('./pages/home/home.module').then((m) => m.HomeModule),
  },

  {
    path: 'task',
    component: TasksComponent
  },

  {
    path: 'private' ,
    component: PrivateTasksComponent 
  },

  {
    path: 'signup' ,
    component: SignupComponent
  },

  {
    path: 'notFound',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/auth/login/login.module').then((m) => m.LoginModule),
    canActivate: [CheckLoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
