import React, { useCallback, useEffect, useState } from 'react';
import PatientsList from 'components/patientsList/PatientsList';
import { IPatient } from 'types/interfaces/patient.interface';
import { getPatients } from 'actions/patient.action';

const Patients = (): React.ReactElement => {
  const [patients, setPatients] = useState<IPatient[]>([]);

  const loadPatients = useCallback(async (): Promise<void> => {
    const fetchedPatients = await getPatients();
    setPatients(fetchedPatients);
  }, []);

  useEffect(() => {
    loadPatients();
  }, [loadPatients]);

  return (
    <div>
      <h2>Patients</h2>
      <PatientsList patients={patients} />
    </div>
  );
};

export default Patients;
