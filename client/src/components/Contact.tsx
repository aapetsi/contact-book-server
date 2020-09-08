import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { useMutation } from '@apollo/client'
import { DELETE_CONTACT } from '../queries/queries'

// interface ContactProps {
//   id: string
// }

const Contact = (props: any) => {
  const {id} = props
  const [deleteContact] = useMutation(DELETE_CONTACT)

  const handleClick = (e: any) => {
    console.log(e)
    deleteContact({ variables: {id}})
  }
  return (
    <div>
      <Link 
        // to={`/edit/${id}`
        to={{
          pathname: `/edit/${id}`,
          state: {
            firstName: props.firstName,
            lastName: props.lastName,
            email: props.email,
            email2: props.email2,
            email3: props.email3,
            phone: props.phone,
            phone2: props.phone2,
            phone3: props.phone3,
            twitter: props.twitter
          }
        }}
      >
        Edit contact
      </Link>
      <Button onClick={handleClick} type='primary'>Delete Contact</Button>
    </div>
  )
}

export default Contact
