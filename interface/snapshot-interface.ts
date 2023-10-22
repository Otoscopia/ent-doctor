import { Patients } from "./patient-interface";
import { Status } from "./status-type";

export interface SnapshotPayload {
  $collectionId: string;
  $createdAt: string;
  $databaseId: string;
  $id: string;
  $permissions: [];
  $updatedAt: string;
  bloodPressure: string;
  chiefComplaint: string;
  chiefComplaintMessage: string;
  doctor: Doctor;
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
}
