import { Patients } from "@/interface/patient-interface";
import { Status } from "@/interface/status-type";

export interface Screening {
  $collectionId: string;
  $createdAt: string;
  $databaseId: string;
  $id: string;
  $permissions: [];
  $updatedAt: string;
  bloodPressure: string;
  chiefComplain: string;
  chiefComplainMessage: string;
  doctor: Object;
  doctorComment: string;
  frameOfInterest: string;
  hasAllergies: string;
  hasSimilarCondition: string;
  healthWorkerComment: string;
  height: string;
  historyOfIllness: string;
  patient: Patients;
  status: Status;
  takingMedication: string;
  takingMedicationMessage: string;
  temperature: string;
  uid: string;
  undergoSurgery: string;
  weight: string;
  nurse: Nurse;
}
