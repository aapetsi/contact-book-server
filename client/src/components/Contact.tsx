import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { useMutation } from '@apollo/client'
import { DELETE_CONTACT } from '../queries/queries'

// interface ContactProps {
//   id: string
// }

const Contact = (props: any) => {
  const {id, firstName, lastName, email, email2, email3, phone, phone2, phone3} = props
  const [deleteContact] = useMutation(DELETE_CONTACT)

  const handleClick = (e: any) => {
    console.log(e)
    deleteContact({ variables: {id}})
  }
  return (
    <div>
      <div className='contact-info'>
        <p>{firstName.toUpperCase()} {lastName.toUpperCase()}</p>
        <div className="email">
          <span>Email: {email}</span>
          <span>Email: {email2}</span>
        </div>
   
        phone: {phone}
        phone2: {phone2}
        phone3: {phone3}
      </div>
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
      <Button onClick={handleClick} type='primary' danger>Delete Contact</Button>
    </div>
  )
}

export default Contact
