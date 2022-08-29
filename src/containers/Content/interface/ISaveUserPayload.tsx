import { IPremiumPayload } from './IPremiumPayload';

export interface ISavingUserPayload extends IPremiumPayload {
  name: string;
  address: string;
  liscenceNumber: string;
}
