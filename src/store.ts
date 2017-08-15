import counter, {CounterActions, CounterState} from './counter/module'
import canvas, {CanvasActions, CanvasState} from './canvas/module'
import {createStore, combineReducers, Action} from 'redux'

export default createStore(
  combineReducers({
    counter,
    canvas
  })
)

export type ReduxState = {
  counter : CounterState,
  canvas: CanvasState
}

export type ReduxAction = CounterActions | CanvasActions | Action
