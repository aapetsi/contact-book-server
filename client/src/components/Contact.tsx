import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { useMutation } from '@apollo/client'
import {DELETE_CONTACT, GET_CONTACTS_QUERY} from '../queries/queries'

// interface ContactProps {
//   id: string
// }

const Contact = (props: any) => {
  const {id} = props
  const [deleteContact] = useMutation(DELETE_CONTACT)

  const handleClick = (e: Event): void => {
    console.log(e)
  }
  return (
    <div>
      <h2>Contact component</h2>
      <Link to={`/edit/${id}`}>Edit contact</Link>
      <Button onClick={() => handleClick} type='primary'>Delete Contact</Button>
    </div>
  )
}

export default Contact
