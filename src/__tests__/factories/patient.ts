import { Factory } from 'fishery';
import * as faker from 'faker';
import { IPatient } from 'types/interfaces/patient.interface';

export default Factory.define<IPatient>(({ sequence }) => {
  const { name, address, phone } = faker;
  return {
    id: sequence,
    name: name.findName(),
    homeAddress: address.direction(),
    telephone: phone.phoneNumber(),
  };
});
