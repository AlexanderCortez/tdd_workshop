import React from 'react';
import { shallow } from 'enzyme';
import Patients from 'pages/Patients';
import * as patientActions from 'actions/patient.action';
import factories from '__tests__/factories';
import { sleep } from './utils';

describe('Patients Test', (): void => {
  it('should render all components', () => {
    const wrapper = shallow(<Patients />);
    expect(wrapper.find('h2').text()).toEqual('Patients');
    expect(wrapper.exists('PatientsList')).toBeTruthy();
  });

  it('should load some patients from api', async () => {
    const patients = factories.patient.buildList(8);
    jest.spyOn(patientActions, 'getPatients').mockResolvedValue(patients);
    jest.spyOn(React, 'useEffect').mockImplementationOnce((f) => f());
    const wrapper = shallow(<Patients />);
    await sleep();
    const patientListComponent = wrapper.find('PatientsList');
    expect(patientListComponent.props()).toHaveProperty('patients', patients);
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<Patients />);
    expect(wrapper).toMatchSnapshot();
  });
});
