// src/app/state/items.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ItemsService } from '../../services/items/items.service';
import * as ItemsActions from './items.actions';

@Injectable()
export class ItemsEffects {
  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemsActions.loadItems),
      mergeMap(() =>
        this.itemsService.getItems().pipe(
          map((items) => ItemsActions.loadItemsSuccess({ items })),
          catchError((error) => of(ItemsActions.loadItemsFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private itemsService: ItemsService) {}
}
