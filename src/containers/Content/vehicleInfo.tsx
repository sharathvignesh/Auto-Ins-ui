import { Form, Input, Radio } from 'antd';
import React from 'react';

import { IState } from './interface/IState';

interface IVehicleInfoProps {
  onChange: any;
  formData: IState;
}

const VehicleInfo = (props: IVehicleInfoProps) => {
  return (
    <>
      <Form.Item
        label="Vehicle type"
        initialValue={'car'}
        rules={[{ required: true, message: 'Please select vehicle type!' }]}
      >
        <Radio.Group
          name="vehicletype"
          style={{ display: 'flex' }}
          onChange={props.onChange}
          value={props.formData.vehicletype}
        >
          <Radio value={'car'}>Car</Radio>
          <Radio value={'bike'}>Bike</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        label="Estimated Distance"
        rules={[{ required: true, message: 'Please input estimated distance!' }]}
      >
        <Input
          value={props.formData.estimateDistance}
          name="estimateDistance"
          placeholder="Name"
          onChange={props.onChange}
        />
      </Form.Item>

      <Form.Item label="Towing service" initialValue={props.formData.towingService}>
        <Radio.Group
          name="towingService"
          value={props.formData.towingService}
          style={{ display: 'flex' }}
          onChange={props.onChange}
        >
          <Radio value={true}>Yes</Radio>
          <Radio value={false}>No</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="Lawyer service" initialValue={props.formData.lawyerService}>
        <Radio.Group
          name="lawyerService"
          value={props.formData.lawyerService}
          style={{ display: 'flex' }}
          onChange={props.onChange}
        >
          <Radio value={true}>Yes</Radio>
          <Radio value={false}>No</Radio>
        </Radio.Group>
      </Form.Item>
    </>
  );
};

export default VehicleInfo;
