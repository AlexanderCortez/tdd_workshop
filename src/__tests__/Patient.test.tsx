import factories from '__tests__/factories';

describe('Patient Component Test', (): void => {
  it('should display a list of 10 items', () => {
    const role = factories.role.build();
    const patient = factories.patient.build({ role });
    console.log('patient: ', patient);
  });
});
