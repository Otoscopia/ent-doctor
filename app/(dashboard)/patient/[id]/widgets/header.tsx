import { Patients } from "@/interface/patient-interface";
import { Status } from "@/interface/status-type";

interface Props {
  patient: Patients;
  status: Status;
}

export default function Header({ patient, status }: Props) {
  return (
    <div className="card shadow-xl bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="card-body">
        <div>
          <h2 className="card-title">
            {patient.fullName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="text-sm">Birthday: {patient.birthDate}</p>
          <p className="text-sm">Age: ${patient.$id}</p>
          <p className="text-sm">Gender: {patient.gender}</p>
          <p className="text-sm">School: {patient.school}</p>
          <p className="text-sm">Contact Number: {patient.contactNumber}</p>
        </div>
        <div className="card-actions justify-start">
          <div className="badge badge-outline">Initial Diagnosis</div>
          <div className="badge badge-outline">Pending</div>
        </div>
      </div>
    </div>
  );
}
