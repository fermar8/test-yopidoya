import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { SearchRepositoriesComponent } from './search-repository.component';
import { SearchRepositoryService } from 'src/services/searchRepository/search-repository.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [ReactiveFormsModule, CommonModule],
    exports: [SearchRepositoriesComponent],
    declarations: [SearchRepositoriesComponent],
    providers: [SearchRepositoryService],
 })
 
 export class SearchRepositoriesModule {
 }