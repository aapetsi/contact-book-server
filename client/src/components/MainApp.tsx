import React from 'react'
import { Typography } from 'antd'
import ContactList from './ContactList'

const { Title } = Typography

const MainApp = () => {
  return (
    <div>
      <Title>Contact Book</Title>
      <ContactList />
    </div>
  )
}

export default MainApp
