import { DatePicker, Form, Input, Radio } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';

import { liscenceType } from './interface/IState';

interface IUserInfoProps {
  onDateChange: any;
  onChange: any;
  liscenceType: liscenceType;
}

const UserInfo = (props: IUserInfoProps) => {
  return (
    <>
      <Form.Item
        label="name"
        initialValue=""
        rules={[{ required: true, message: 'Please input your Name!' }]}
      >
        <Input name="name" placeholder="Name" onChange={props.onChange} />
      </Form.Item>

      <Form.Item
        initialValue=""
        label="Date of Birth"
        rules={[{ required: true, message: 'Please input your dob!' }]}
      >
        <DatePicker
          name="dob"
          style={{ display: 'flex' }}
          onChange={props.onDateChange}
        />
      </Form.Item>

      <Form.Item
        initialValue=""
        label="Address"
        rules={[{ required: true, message: 'Please input your address!' }]}
      >
        <TextArea name="address" rows={3} onChange={props.onChange} />
      </Form.Item>

      <Form.Item
        initialValue=""
        label="Phone number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input name="phonenumber" placeholder="Phone number" onChange={props.onChange} />
      </Form.Item>

      <Form.Item
        initialValue=""
        label="Liscense number"
        rules={[
          { required: true, message: 'Please input your 11 digit Liscense number!' },
        ]}
      >
        <Input name="liscence" placeholder="Liscense number" onChange={props.onChange} />
      </Form.Item>

      <Form.Item
        label="Liscence Type"
        rules={[{ required: true, message: 'Please liscence type!' }]}
      >
        <Radio.Group
          name="liscenceType"
          buttonStyle="solid"
          style={{ display: 'flex' }}
          onChange={props.onChange}
          value={props.liscenceType}
        >
          <Radio.Button value="gold">{'Gold'}</Radio.Button>
          <Radio.Button value="blue">{'Blue'}</Radio.Button>
          <Radio.Button value="green">{'Green'}</Radio.Button>
        </Radio.Group>
      </Form.Item>
    </>
  );
};

export default UserInfo;
