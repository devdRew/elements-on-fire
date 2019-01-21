import { storeFreeze } from "ngrx-store-freeze";
import { TestState } from './test/test.reducer';

export interface RootState {
  readonly test: TestState;
}

export const metaReducers = [storeFreeze];
