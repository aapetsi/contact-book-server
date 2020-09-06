import React from 'react'
import { Form, Input, Button } from 'antd'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {graphql} from 'react-apollo'
import '../styles/AddContact.css'
import * as ContactActions from '../store/actions'
import {addContactMutation} from '../queries/queries'


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

const validateMessages = {
  types: {
    // eslint-disable-next-line
    email: '${label} is not valid!',
  }
}

const AddContact = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  
  const onFinish = (values: any) => {
    console.log('Success:', values)
    dispatch(ContactActions.addContact(values))
    history.push('/')
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
      >
        <Input className='input' />
      </Form.Item>

      <Form.Item
        label='Alternate Email'
        name='email3'
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
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default graphql(addContactMutation)(AddContact)
