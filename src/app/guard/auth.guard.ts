import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { firstValueFrom } from 'rxjs';

export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  try {
    const isAuth = await firstValueFrom(authService.isAuthenticated());
    if (isAuth) {
      return true;
    } else {
      await router.navigate(['/login']);
      return false;
    }
  } catch (error) {
    console.error("Error checking authentication", error);
    await router.navigate(['/login']);
    return false;
  }
};
