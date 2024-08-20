// src/app/state/items.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { loadItems, loadItemsSuccess, loadItemsFailure } from './items.actions';

export interface ItemsState {
  items: any[];
  loading: boolean;
  error: any;
}

export const initialState: ItemsState = {
  items: [],
  loading: false,
  error: null,
};

export const itemsReducer = createReducer(
  initialState,
  on(loadItems, (state) => ({ ...state, loading: true })),
  on(loadItemsSuccess, (state, { items }) => ({
    ...state,
    items,
    loading: false,
  })),
  on(loadItemsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
