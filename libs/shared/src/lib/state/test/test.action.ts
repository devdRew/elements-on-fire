import { Action } from "@ngrx/store";

export enum TestActionTypes {
  Fire = '[Test] Fire',
}

export class Fire implements Action {
  readonly type = TestActionTypes.Fire;
  constructor(public payload: number) {}
}

export type TestActions = Fire;
