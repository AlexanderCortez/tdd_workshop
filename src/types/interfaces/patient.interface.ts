import { IRole } from './role.interface';

export interface IPatient {
  id: number;
  name: string;
  telephone: string;
  homeAddress: string;
  role?: IRole;
}
