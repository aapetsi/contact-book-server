import React from 'react'
import { Form, Input, Button, Spin } from 'antd'
import { useHistory } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client'
import '../styles/AddContact.css'
import { UPDATE_CONTACT, GET_CONTACTS_QUERY, GET_CONTACT_QUERY } from "../queries/queries";

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
    email: '${label} is not valid!'
  }
}

const EditContact = (props: any) => {
  const [updateContact] = useMutation(UPDATE_CONTACT)
  const {loading, data, error} = useQuery(GET_CONTACT_QUERY)

  const history = useHistory()

  const onFinish = async (values: any) => {
    console.log('Success:', values)

    try {
      updateContact({variables: {...values, phone: 276202069}, refetchQueries: [{query: GET_CONTACTS_QUERY}]})
    } catch (error) {
      console.log(error)
    }

    history.push('/')
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed', errorInfo)
  }

  return (
    <Spin spinning={loading}>
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
        rules={
          [{
            required: true,
            message: 'Please input contact\'s first name!'
          }]
        }
      >
        <Input className='input' defaultValue={data?.firstName} />
      </Form.Item>

      <Form.Item
        label='Last Name'
        name='lastName'
        rules={[{
          required: true,
          message: 'Please input contact\'s last name!'
        }]}
      >
        <Input className='input' defaultValue={data?.lastName} />
      </Form.Item>

      <Form.Item
        label='Email'
        name='email'
        rules={[{
          required: true,
          type: 'email'
        }]}
      >
        <Input className='input' defaultValue={data?.email} />
      </Form.Item>

      <Form.Item
        label='Alternate Email'
        name='email2'
      >
        <Input className='input' defaultValue={data?.email2} />
      </Form.Item>

      <Form.Item
        label='Alternate Email'
        name='email3'
      >
        <Input className='input' defaultValue={data?.email3} />
      </Form.Item>

      <Form.Item
        label='Phone Number'
        name='phone'
        rules={[{
          required: true,
          message: 'Please input contact\'s phone number!',
        }]}
      >
        <Input className='input' pattern='^0[2,5]\d{8}' placeholder='024123456' defaultValue={data?.phone} />
      </Form.Item>

      <Form.Item
        label='Home Phone Number'
        name='phone2'
        rules={[{}]}
      >
        <Input className='input' pattern='^0[2,5]\d{8}' placeholder='024123456' defaultValue={data?.phone2} />
      </Form.Item>

      <Form.Item
        label='Work Phone Number'
        name='phone3'
        rules={[{}]}
      >
        <Input className='input' pattern='^0[2,5]\d{8}' placeholder='024123456' defaultValue={data?.phone3} />
      </Form.Item>

      <Form.Item
        label='Twitter Username'
        name='twitter'
        rules={[{}]}
      >
        <Input className='input' defaultValue={data?.twitter} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Edit Contact
        </Button>
      </Form.Item>

    </Form>
  
    </Spin>
)
}

export default EditContact
