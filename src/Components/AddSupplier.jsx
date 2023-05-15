import { Button, Form, Input } from 'antd';
import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';


const AddSupplier = () => {
    let navigate = useNavigate();

  const submitProductForm = (values) => {

    axios.post('https://northwind.vercel.app/api/suppliers', values)
      .then(res => {
        navigate('/');
      })

  }
  return (<>

    <Form
      name='basic'
      initialValues={{ companyName: '', contactName: '', contactTitle: '',address:{city:""} }}
      onFinish={submitProductForm}
    >

      <Form.Item
        label="Company Name"
        name="companyName"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Contact Name"
        name="contactName"
        rules={[{ required: true, message: 'Please input unit price!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Contact Title"
        name="contactTitle"
        rules={[{ required: true, message: 'Please input units in stock!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>


    </Form>

  </>
  )
}

export default AddSupplier