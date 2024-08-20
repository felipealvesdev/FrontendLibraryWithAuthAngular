import { AuthService } from './../../services/auth/auth.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators'; // Serviço de autenticação (opcional)
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      // Aqui você pode adicionar efeitos como redirecionar para uma página protegida
      map(() => {
        // Exemplo: redirecionar após login bem-sucedido
        this.router.navigate(['/dashboard']);
        return AuthActions.noOp(); // Se não precisar despachar outra ação
      })
    )
  );

  // Se você estiver lidando com a falha de login e precisar de algum efeito adicional, adicione aqui
  loginFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginFailure),
      // Aqui você pode adicionar efeitos relacionados a falhas de login
      map(() => {
        // Exemplo: mostrar uma mensagem de erro
        return AuthActions.noOp(); // Se não precisar despachar outra ação
      })
    )
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private AuthService: AuthService // Se necessário
  ) {}
}
