import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Http, Response } from "@angular/http";

@Injectable()
export class NewServiceCall {

    constructor(private http: HttpClient) {}

    getDataFromDiffApp(): Observable<any> {
        return this.http.get("url");
    }

}
