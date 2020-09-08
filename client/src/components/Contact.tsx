import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { useMutation } from '@apollo/client'
import { DELETE_CONTACT } from '../queries/queries'
import '../styles/Contact.css'
// interface ContactProps {
//   id: string
// }

const Contact = (props: any) => {
  let {id, firstName, lastName, email, email2, email3, phone, phone2, phone3, twitter} = props

  phone2 = phone2 ? '0' + phone2 : false
  phone3 = phone3 ? '0' + phone3 : false

  const [deleteContact] = useMutation(DELETE_CONTACT)

  const handleClick = (e: any) => {
    console.log(e)
    deleteContact({ variables: {id}})
  }
  return (
    <div className='contact-info'>
      <div>
        <p>{firstName.toUpperCase()} {lastName.toUpperCase()}</p>
        <div className="details">
          <span>Email: {email}</span>
          <span>Email: {email2}</span>
          <span>Email: {email3}</span>
        </div>

        <div className='details'>
          <span>Phone: {'0' + phone}</span>
          <span>Home Number: {phone2}</span>
          <span>Work Number: {phone3}</span>
        </div>

        <div>
          <span>Twitter <a href={`https://twitter.com/${twitter}`} target='blank'>{twitter}</a></span>
        </div>
        
      </div>
      <div style={{marginBottom: '5px'}}>
        <Link 
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
      </div>
      <div>
        <Button onClick={handleClick} type='primary' danger>Delete Contact</Button>
      </div>
    </div>
  )
}

export default Contact
