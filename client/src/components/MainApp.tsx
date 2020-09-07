import React from 'react'
import { Typography, Button } from 'antd'
import ContactList from './ContactList'

const { Title } = Typography

const MainApp = () => {
  return (
    <div>
      <Title>Contact Book</Title>
      <ContactList />
      <Button type="primary">Delete All Contacts</Button>
    </div>
  )
}

export default MainApp
