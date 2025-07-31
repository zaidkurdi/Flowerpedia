import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoreDetailsComponent } from './Components/more-details/more-details.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'more-details', component: MoreDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
