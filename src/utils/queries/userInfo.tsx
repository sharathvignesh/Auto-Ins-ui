import axios from 'axios';

import { ISavingUserPayload } from '../../containers/Content/interface/ISaveUserPayload';

export const saveUserDetails = async function (payload: ISavingUserPayload) {
  const { data: response } = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/v1/user`,
    payload,
  );
  return response;
};
