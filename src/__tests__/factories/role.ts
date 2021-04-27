import { Factory } from 'fishery';
import * as faker from 'faker';
import { IRole } from 'types/interfaces/role.interface';

export default Factory.define<IRole>(({ sequence }) => {
  return {
    id: sequence,
    name: faker.name.findName(),
  };
});
