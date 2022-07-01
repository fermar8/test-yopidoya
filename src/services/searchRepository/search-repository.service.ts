import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

type username = string | undefined;
type repository = string | undefined;

@Injectable()
export class SearchRepositoryService {
    public api = 'https://api.github.com/repos';
    public response:any;

     /**
     * 
     * @param http 
     */
      constructor( private http: HttpClient ) {
        console.log('Api github services');
    }
    /**
     * 
     * @param username
     * @param repository 
     */
    getContributorsInRepository(username: username, repository: repository): Observable<unknown>{
        return this.http
            .get(`${this.api}/${username}/${repository}/stats/contributors`)
            .pipe(catchError(this.handleError));
    }

    private handleError(res: HttpErrorResponse) {
        console.error(res.error);
        return res.error || 'Server error';
      }
    
}