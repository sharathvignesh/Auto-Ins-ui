import { useMutation } from '@tanstack/react-query';
import { Button, Form, Layout, Steps } from 'antd';
import React, { useState } from 'react';

import { calculatePremium } from '../../utils/queries/calculate';
import { saveUserDetails } from '../../utils/queries/userInfo';
import { IState } from './interface/IState';
import PaymentInfo from './paymentInfo';
import UserInfo from './userInfo';
import VehicleInfo from './vehicleInfo';

const steps = [
  {
    title: 'User Information',
  },
  {
    title: 'Vehicle Information',
  },
  {
    title: 'Payment',
  },
];

const { Content } = Layout;
const { Step } = Steps;

const AppContent = () => {
  const [current, setCurrent] = useState(0);
  const [premium, setPremium] = useState('');
  const [formData, setFormData] = useState<IState>({
    name: '',
    dob: '',
    address: '',
    phonenumber: '',
    liscence: '',
    vehicletype: 'car',
    estimateDistance: '2000',
    towingService: true,
    lawyerService: true,
    liscenceType: 'blue',
  });

  //@ts-ignore
  const { mutate: getPremiumMutation, isCalculatingPremium } = useMutation(
    calculatePremium,
    {
      onSuccess: (data) => {
        console.log(data);
        setPremium(data);
      },
      onError: () => {
        alert('there was an error');
      },
    },
  );

  const { mutate } = useMutation(saveUserDetails, {
    onSuccess: () => {
      alert('user saved');
    },
    onError: () => {
      alert('there was an error');
    },
  });
  const [form] = Form.useForm();

  const next = () => {
    form
      .validateFields()
      .then(() => {
        if (current === 1) {
          getPremiumMutation({
            type: formData.vehicletype,
            liscenceType: formData.liscenceType,
            dob: formData.dob,
            estimateDistance: Number(formData.estimateDistance),
            towingService: formData.towingService,
            lawyerService: formData.lawyerService,
          });
        }
        setCurrent(current + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(e.target);
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
  };

  const onDateChange = (date: Date, dateString: string) => {
    console.log(date, dateString);
    setFormData((prevState) => ({
      ...prevState,
      dob: dateString,
    }));
  };

  const onFinish = () => {
    mutate({
      name: formData.name,
      address: formData.address,
      liscenceNumber: formData.liscence,
      type: formData.vehicletype,
      liscenceType: formData.liscenceType,
      dob: formData.dob,
      estimateDistance: Number(formData.estimateDistance),
      towingService: formData.towingService,
      lawyerService: formData.lawyerService,
    });
  };

  return (
    <>
      <Content className="content">
        <Steps current={current}>
          {steps.map((step, index) => (
            <Step key={index} title={step.title} />
          ))}
        </Steps>
        <Form
          name="insForm"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          autoComplete="off"
          onFinish={onFinish}
          form={form}
        >
          <div className="steps-content">
            {current === 0 && (
              <UserInfo
                onChange={onChange}
                onDateChange={onDateChange}
                liscenceType={formData.liscenceType}
              />
            )}
            {current === 1 && <VehicleInfo onChange={onChange} formData={formData} />}
            {current === 2 && (
              <PaymentInfo
                premium={premium}
                isCalculatingPremium={isCalculatingPremium}
              />
            )}
          </div>
          <div className="steps-action">
            {current === 0 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 2 && (
              <Button type="primary" onClick={() => next()}>
                Get Quote
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button htmlType="submit" type="primary">
                Make Payment
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </Form>
      </Content>
    </>
  );
};

export default AppContent;
