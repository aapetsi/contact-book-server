import React from 'react'
import { Form, Input, Button } from 'antd'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import '../styles/AddContact.css'
import { ADD_CONTACT_MUTATION, GET_CONTACTS_QUERY } from '../queries/queries'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

const validateMessages = {
  types: {
    email: 'Email is not valid!',
  }
}

const AddContact = (props: any) => {
  const [addContact] = useMutation(ADD_CONTACT_MUTATION)
  // const dispatch = useDispatch()
  const history = useHistory()

  const formatNumber = (phone: String, phone2: String, phone3: String ) => {
    phone2 = phone2 === undefined ? '0' : phone2
    phone3 = phone3 === undefined ? '0' : phone2
    return {
      phone: Number(phone.substr(1,9)),
      phone2: Number(phone2.substr(1,9)),
      phone3: Number(phone3.substr(1,9))
    }
  }
  
  const onFinish = async (values: any) => {
    console.log('Success:', values)
    
    try {
      addContact({
        variables: {
          ...values,
          ...formatNumber(values.phone, values.phone2, values.phone3) 
        }, refetchQueries: [{query: GET_CONTACTS_QUERY}]
      })
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      {...layout}
      name='nest-messages'
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      validateMessages={validateMessages}
    >
      <Form.Item
        label='First Name'
        name='firstName'
        rules={[{
          required: true,
          message: 'Please input contact\'s first name!'
        }]}
      >
        <Input className='input'/>
      </Form.Item>

      <Form.Item
        label='Last Name'
        name='lastName'
        rules={[{
          required: true,
          message: 'Please input contact\'s last name!'
        }]}
      >
        <Input className='input' />
      </Form.Item>

      <Form.Item
        label='Email'
        name='email'
        rules={[{
          required: true,
          type: 'email'
        }]}
      >
        <Input className='input' />
      </Form.Item>

      <Form.Item
        label='Alternate Email'
        name='email2'
        rules={[{
          type: 'email'
        }]}
      >
        <Input className='input' />
      </Form.Item>

      <Form.Item
        label='Alternate Email'
        name='email3'
        rules={[{
          type: 'email'
        }]}
      >
        <Input className='input' />
      </Form.Item>

      <Form.Item
        label='Phone Number'
        name='phone'
        rules={[{
          required: true,
          message: 'Please input contact\'s phone number!',
        }]}
      >
        <Input className='input' pattern='^0[2,5]\d{8}' placeholder='024123456' />
      </Form.Item>

      <Form.Item
        label='Home Phone Number'
        name='phone2'
        rules={[{}]}
      >
        <Input className='input' pattern='^0[2,5]\d{8}' placeholder='024123456' />
      </Form.Item>

      <Form.Item
        label='Work Phone Number'
        name='phone3'
        rules={[{}]}
      >
        <Input className='input' pattern='^0[2,5]\d{8}' placeholder='024123456' />
      </Form.Item>

      <Form.Item
        label='Twitter Username'
        name='twitter'
        rules={[{}]}
      >
        <Input className='input' />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Add Contact
        </Button>
      </Form.Item>
    </Form>
  )
}

export default (AddContact)
