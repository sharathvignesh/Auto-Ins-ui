import axios from 'axios';

import { IPremiumPayload } from '../../containers/Content/interface/IPremiumPayload';

export const calculatePremium = async function (payload: IPremiumPayload) {
  const { data: response } = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/v1/calculate`,
    payload,
  );
  return response.premium;
};
