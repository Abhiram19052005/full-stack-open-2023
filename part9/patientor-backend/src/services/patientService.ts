/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import patientData from '../../data/patients';
import { v1 as uuid } from 'uuid';

import { NoSsnPatient, Patient, NewPatient } from '../types';

const getPatient = (): Patient[] => {
    return patientData;
};

const getNoSsnPatient = (): NoSsnPatient[] => {
    return patientData.map(({ id, name, dateOfBirth, gender, occupation, entries }) => 
    ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
        entries
    }));
};

const getPatientForOne = (id: string): Patient | undefined => {
    return patientData.find(p => p.id === id);
};


const addPatient = ( entry: NewPatient ): Patient => {
    const id = uuid();
    const newPatient = {
        id,
        ...entry
    };

    patientData.push(newPatient);
    return newPatient;
};

export default {
    getPatient,
    getNoSsnPatient,
    addPatient,
    getPatientForOne
};