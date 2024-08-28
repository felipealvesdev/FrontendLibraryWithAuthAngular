import { AuthService } from './../../services/auth/auth.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      map(() => {
        this.router.navigate(['/home']);
        return AuthActions.noOp();
      })
    )
  );

  loginFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginFailure),
      map(() => {
        return AuthActions.noOp();
      })
    )
  );

  constructor(
    private actions$: Actions,
    private router: Router,
  ) {}
}
