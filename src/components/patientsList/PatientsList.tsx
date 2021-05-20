import React from 'react';
import { IPatient } from 'types/interfaces/patient.interface';

type Props = {
  patients: IPatient[];
};

const PatientsList = ({ patients }: Props): React.ReactElement => {
  return <span />;
};

export default PatientsList;
