export interface Patients {
  $collectionId: string;
  $createdAt: string;
  $databaseId: string;
  $id: string;
  $permissions: [];
  $updatedAt: string;
  fullName: string;
  gender: string;
  birthDate: string;
  contactNumber: string;
  schoolID: string;
  school: string;
  nurse: Nurse;
  createdAt: string;
}
