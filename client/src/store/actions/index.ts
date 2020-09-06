import * as Actions from '../action-types'
import {Dispatch} from 'redux'

interface ContactPayload {
  firstName: string,
  lastName: string,
  twitter?: string,
  phone: number,
  phone2?: number,
  phone3?: number,
  email: string,
  email2?: string,
  email3?: string
}

export const addContact = (contact: ContactPayload) => (dispatch: Dispatch) => {
  dispatch({
    type: Actions.ADD_CONTACT,
    payload: contact
  })
}

export const getContacts = () => (dispatch: Dispatch) => {
  dispatch({
    type: Actions.GET_CONTACTS,
    payload: []
  })
}

export const deleteContact = (id: string) => (dispatch: Dispatch) => {
  dispatch({
    type: Actions.DELETE_CONTACT,
    payload: id
  })
}

export const editContact = (contact: ContactPayload) => (dispatch: Dispatch) => {
  deleteContact(contact.email)
  addContact(contact)
}