import React from 'react'
import { useQuery } from '@apollo/client'
import Contact from './Contact'
import { GET_CONTACTS_QUERY } from '../queries/queries'


const ContactList = (props: any) => {
  const { loading, error, data } = useQuery(GET_CONTACTS_QUERY)
  const renderContacts = () => {
    if (data) {
      return data.contacts.map((contact: any) => (<Contact key={contact.id} {...contact} />))
    }
  }
  
  return (
    <div>
      <h2>Contacts</h2>
      {loading && <p>Loading contacts ...</p>}
      {renderContacts()}
      <p>{error && error.message}</p>
    </div>
  )
}

export default ContactList
