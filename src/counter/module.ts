import {Action} from 'redux'

enum ActionNames {
  INC = 'counter/increment',
  DEC = 'counter/decrement',
  HOGE = 'counter/hoge',
}

interface IncrementAction extends Action {
  type: ActionNames.INC
  plusAmount: number
}
export const incrementAmount = (amount: number): IncrementAction => ({
  type: ActionNames.INC,
  plusAmount: amount
})

interface DecrementAction extends Action {
  type: ActionNames.DEC
  minusAmount: number
}

export const decrementAmount = (amount: number): DecrementAction => ({
  type: ActionNames.DEC,
  minusAmount: amount
})

interface HogeAction extends Action {
  type: ActionNames.HOGE
}

export const hoge = (amount: number): HogeAction => ({
  type: ActionNames.HOGE,
})


export interface CounterState {
  num: number
}

export type CounterActions = IncrementAction | DecrementAction | HogeAction

const initialState:CounterState = {num: 0}

export default function reducer(state: CounterState = initialState, action: CounterActions): CounterState {
  switch (action.type) {
    case ActionNames.INC:
      return {num: state.num + action.plusAmount}
    case ActionNames.DEC:
      return {num: state.num - action.minusAmount}
    case ActionNames.HOGE:
      return {num: 9999}
    default:
      return state
  }
}
