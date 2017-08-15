import {Action} from 'redux'

enum ActionNames {
  CHANGE_TEXT = 'counter/changeText'
}

export interface CanvasState {
  text: string
}

interface ChangeTextAction extends Action {
    type: ActionNames.CHANGE_TEXT
    text: string
  }

export const changeText = (str: string):ChangeTextAction => ({
    type: ActionNames.CHANGE_TEXT,
    text: str
})

export type CanvasActions = ChangeTextAction

const initialState:CanvasState = {text: ''}

export default function reducer(state: CanvasState = initialState, action: CanvasActions): CanvasState {
    //console.log(state)
    //console.log(action)
  switch (action.type) {
    case ActionNames.CHANGE_TEXT:
        return {
            text: action.text
        }
    
    default:
      return state
  }
}
