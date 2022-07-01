import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchRepositoriesComponent } from 'src/components/searchRepository/search-repository.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'dashboard', component: SearchRepositoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
