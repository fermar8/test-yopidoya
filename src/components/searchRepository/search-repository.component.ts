import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import { SearchRepositoryService } from '../../services/searchRepository/search-repository.service';

@Component({
  selector: 'app-search-repository',
  templateUrl: './search-repository.component.html',
  styleUrls: ['./search-repository.component.css']
})
export class SearchRepositoriesComponent implements OnInit {


  /**
  * Variables 
  * @var repositories
  * @var username
  * @var repository
  */
  repositories: any;
  @Input() username = '';
  @Input() repository = '';
  status = false;

  /**
   * 
   * @param searchRepositoryService 
   */
  constructor(private searchRepositoryService: SearchRepositoryService) {
  }

  ngOnInit(): void {
  }

  onChangeUsername(event: string) {
    this.username = event;
  }
  onChangeRepository(event: string) {
    this.repository = event;
  }

  formSearch = new FormGroup({
    username: new FormControl('',
      Validators.compose([
        Validators.required,
      ])
    ),
    repository: new FormControl('',
      Validators.compose([
        Validators.required,
      ])
    ),
  })

  search() {
    const data = this.searchRepositoryService.getContributorsInRepository(this.username, this.repository);
    data.subscribe(
      (response) => {
        this.repositories = response;
      }
    )
  }
}