export type Vehicletype = 'car' | 'bike';
export type liscenceType = 'gold' | 'blue' | 'green';

export interface IState {
  name: string;
  dob: string;
  address: string;
  phonenumber: string;
  liscence: string;
  vehicletype: Vehicletype;
  estimateDistance: string;
  towingService: boolean;
  lawyerService: boolean;
  liscenceType: liscenceType;
}
