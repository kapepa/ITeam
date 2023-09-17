import { Injectable } from '@angular/core';
import {BehaviorSubject, from, Observable, of, switchMap, take, tap, timer} from "rxjs";
import {LoginInDto} from "../../utility";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loading: boolean = false;
  private loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.loading);
  private error$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
  constructor() { }

  public createUser(props: LoginInDto): Observable<any> {
    this.loading$.next(true);
    this.error$.next(undefined);

    return timer(1000).pipe(
      take(1),
      switchMap(() => {
        return of(props).pipe(
          tap({
            next: () => {
              this.loading$.next(false);
              return props;
            },
            error: (error) => {
              this.loading$.next(false);
              this.error$.next(error.message);
            }
          })
        );
      })
    )
  }

  get isLoading () {
    return this.loading$.asObservable();
  }

  get isError () {
    return this.error$.asObservable();
  }
}
