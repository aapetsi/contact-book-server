import React, { useEffect } from 'react'
import {useQuery} from '@apollo/client'
import Contact from './Contact'
import { GET_CONTACTS_QUERY } from '../queries/queries'


const ContactList = (props: any) => {
  // const dispatch = useDispatch()
  // const contactState = useSelector((state) => state.contacts)
  const { loading, data } = useQuery(GET_CONTACTS_QUERY)
  const renderContacts = () => {
    // console.log(data)
    // let { contacts } = data
    if (data) {
      return data.contacts.map((contact: any) => (<Contact key={contact.id} id={contact.id} />))
    }
  }
  
  return (
    <div>
      <h2>Contacts</h2>
      {loading && <p>Loading contacts ...</p>}
      {renderContacts()}
    </div>
  )
}

export default ContactList
