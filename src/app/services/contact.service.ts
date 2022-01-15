import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, retry, retryWhen, tap } from "rxjs/operators";
import { Observable, of, throwError } from "rxjs";

@Injectable()
export class ContactService{
    constructor(private http:HttpClient){}
    send(mail:any): Observable<Boolean>{
        return this.http.post<String>('http://sendmail.germanywestcentral.azurecontainer.io:3000/send',mail).pipe(
            map(response => {
                console.log(response)
                return true;
            }),
            retry(3),
            retryWhen(error$ => error$.pipe(
                tap(error => throwError("Failed to send "+ error))
            ))
        )
    }
}