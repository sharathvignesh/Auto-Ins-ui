import React from 'react';

interface IPaymentInfoProps {
  isCalculatingPremium: boolean;
  premium: string;
}
const PaymentInfo = (props: IPaymentInfoProps) => {
  console.log(props);
  return (
    <>
      <div>
        Your premium per annum is{' '}
        {props.isCalculatingPremium ? 'calculating...' : props.premium}
      </div>
    </>
  );
};

export default PaymentInfo;
