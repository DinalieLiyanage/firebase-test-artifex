import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirebaseUploadComponent } from './firebase-upload/firebase-upload.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/firebase-upload',
    pathMatch: 'full'
},
  {
    path: 'firebase-upload',
  component: FirebaseUploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
