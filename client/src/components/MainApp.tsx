import React from 'react'
import { Typography, Button } from 'antd'
import ContactList from './ContactList'
import { useMutation } from '@apollo/client'
import {DELETE_CONTACTS, GET_CONTACTS_QUERY} from '../queries/queries'
import '../styles/MainApp.css'

const { Title } = Typography

const MainApp = () => {
  const [deleteContacts] = useMutation(DELETE_CONTACTS)

  const handleClick = () => {
    deleteContacts({variables: {where: {}}, refetchQueries: [{query: GET_CONTACTS_QUERY}]})
  }
  return (
    <div className='app-container'>
      <Title className='app-title'>Contact Book</Title>
      <ContactList />
      <Button onClick={handleClick} type="primary">Delete All Contacts</Button>
    </div>
  )
}

export default MainApp
