import React from 'react'
import { useQuery } from '@apollo/client'
import {Row, Col, Divider} from 'antd'
import Contact from './Contact'
import { GET_CONTACTS_QUERY } from '../queries/queries'

const style = { background: '#e3e3e3', padding: '8px 8px' };

const ContactList = (props: any) => {
  const { loading, error, data } = useQuery(GET_CONTACTS_QUERY)
  const renderContacts = () => {
    if (data) {
      return data.contacts.map((contact: any) => (
        <Col key={contact.id} span={6} className='gutter-row' >
          <div style={style}>
            <Contact {...contact} />
          </div>
        </Col>
      ))
    }
  }
  
  return (
    <div>
      <h2>Contacts</h2>
      {loading && <p>Loading contacts ...</p>}
      <Row gutter={[16, 24]}>
        {renderContacts()}
      </Row>
      <p>{error && error.message}</p>
    </div>
  )
}

export default ContactList
