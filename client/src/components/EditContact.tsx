import React from 'react'
import { Form, Input, Button, Spin } from 'antd'
import { useHistory } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client'
import '../styles/AddContact.css'
import { UPDATE_CONTACT, GET_CONTACT_QUERY } from "../queries/queries";

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
  const {loading} = useQuery(GET_CONTACT_QUERY, {variables: {id: Number(props.match.params.id)}})

  const formatNumber = (phone: Number): String | undefined => {
    if (!phone) return undefined
    return '0' + String(phone)
  }

  const {
    firstName, 
    lastName, 
    email, 
    email2, 
    email3, 
    phone, 
    phone2, 
    phone3, 
    twitter} = props.location.state

  const history = useHistory()

  const onFinish = async (values: any) => {
    console.log('Success:', values)

    try {
      updateContact({variables: {...values, id: Number(props.match.params.id), pk_columns: Number(props.match.params.id)}})
      // updateContact({
      //   variables: {
      //     pk_columns: Number(props.match.params.id),
      //     ...values, ...formatPhone(values.phone, values.phone2, values.phone3)}, refetchQueries: [{query: GET_CONTACTS_QUERY}]})
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
        // initialValue={data}
        initialValue={firstName}
      >
        <Input className='input'   />
      </Form.Item>

      <Form.Item
        label='Last Name'
        name='lastName'
        rules={[{
          required: true,
          message: 'Please input contact\'s last name!'
        }]}
        initialValue={lastName}
      >
        <Input className='input'  />
      </Form.Item>

      <Form.Item
        label='Email'
        name='email'
        rules={[{
          required: true,
          type: 'email'
        }]}
        initialValue={email}
      >
        <Input className='input'  />
      </Form.Item>

      <Form.Item
        label='Alternate Email'
        name='email2'
        initialValue={email2}
      >
        <Input className='input'  />
      </Form.Item>

      <Form.Item
        label='Alternate Email'
        name='email3'
        initialValue={email3}
      >
        <Input className='input'  />
      </Form.Item>

      <Form.Item
        label='Phone Number'
        name='phone'
        rules={[{
          required: true,
          message: 'Please input contact\'s phone number!',
        }]}
        initialValue={formatNumber(phone)}
      >
        <Input className='input' pattern='^0[2,5]\d{8}' placeholder='024123456' />
      </Form.Item>

      <Form.Item
        label='Home Phone Number'
        name='phone2'
        rules={[{}]}
        initialValue={formatNumber(phone2)}
      >
        <Input className='input' pattern='^0[2,5]\d{8}' placeholder='024123456'  />
      </Form.Item>

      <Form.Item
        label='Work Phone Number'
        name='phone3'
        rules={[{}]}
        initialValue={formatNumber(phone3)}
      >
        <Input className='input' pattern='^0[2,5]\d{8}' placeholder='024123456'  />
      </Form.Item>

      <Form.Item
        label='Twitter Username'
        name='twitter'
        rules={[{}]}
        initialValue={twitter}
      >
        <Input className='input'  />
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
