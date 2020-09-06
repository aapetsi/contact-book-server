import * as Actions from '../action-types'

interface ActionType {
  type: string,
  payload: any
}

const initialState = {
  contacts: []
}

const contactsReducer = (state=initialState, action: ActionType) => {
  switch (action.type) {
    case Actions.GET_CONTACTS:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      }

    case Actions.ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      }

    case Actions.EDIT_CONTACT:
      return {
        ...state,
      }

    case Actions.DELETE_CONTACT:
      return state

    default: 
      return state
  }
}

export default contactsReducer