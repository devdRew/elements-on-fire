// tslint:disable-next-line
import { TestActionTypes } from './test.action';
import { All } from '../root.action';

export interface TestState {
  history: number[];
}

export const initialState: TestState = {
  history: [],
};

export function testReducer(state = initialState, action: All): TestState {
  switch (action.type) {
    case TestActionTypes.Fire: {
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    }
    default:
      return state;
  }
}
