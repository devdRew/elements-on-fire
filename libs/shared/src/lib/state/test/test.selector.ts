import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TestState } from './test.reducer';

export const getTestState = createFeatureSelector<TestState>('test');
export const getHistory = createSelector(
  getTestState,
  (state) => state ? state.history : [],
);
