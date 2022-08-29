import { liscenceType, Vehicletype } from './IState';

export interface IPremiumPayload {
  type: Vehicletype;
  liscenceType: liscenceType;
  dob: string;
  estimateDistance: number;
  towingService: boolean;
  lawyerService: boolean;
}
