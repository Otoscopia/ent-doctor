import WeightIcon from "@/icons/weight-icon";
import VitalCard from "./vital-card";
import TemperatureIcon from "@/icons/temperature-icon";
import HeightIcon from "@/icons/height-icon";
import BloodPressureIcon from "@/icons/blood-pressure-icon";
import { SnapshotPayload } from "@/interface/snapshot-interface";
import ImageGallery from "./image-gallery";

export default function Content({ record }: { record: SnapshotPayload }) {
  const images = [
    `https://robohash.org/7be8e91f-bd78-41f7-a8e7-4854bc1b273a?set=set4`,
    `https://robohash.org/3b9fc90b-ef0a-44b1-acc9-2ad09e4cf00d?set=set4`,
    `https://robohash.org/87d280eb-6e29-425d-89df-cf73cb1d622d?set=set4`,
    `https://robohash.org/e8ada2b5-8d4e-456e-af9e-e5af2e1191f7?set=set4`,
    `https://robohash.org/2627466a-1ef4-46d0-b290-9f6112fab66f?set=set4`,
    `https://robohash.org/9df656a4-8c0a-4451-9864-ea4e6079c62c?set=set4`,
    `https://robohash.org/f44ac363-ce89-45a2-aa36-8b1681b2871d?set=set4`,
    `https://robohash.org/c1dfae08-e118-45a7-a8e3-8d3d08095d63?set=set4`,
    `https://robohash.org/4d849fe3-fb8f-412f-8991-638255f4ec70?set=set4`,
    `https://robohash.org/b0306237-dab4-47e3-97fb-580d6905e081?set=set4`,
  ];

  return (
    <div className="card p-2 my-2 space-y-4 overflow-x-hidden">
      <div>
        <h3 className="card-title">Health Record</h3>
        <p className="text-sm">Performed by: </p>
        <p className="text-sm">
          Date: <span className="font-bold">{record.$createdAt}</span>
        </p>
        <p className="text-sm">
          Health Worker Comment:{" "}
          <span className="font-bold">{record.healthWorkerComment}</span>
        </p>
      </div>

      <div>
        <p className="text-sm">
          Chief Complaint:{" "}
          <span className="font-bold">{record.chiefComplaint}</span>
        </p>
        {record.chiefComplaintMessage.length > 0 && (
          <p className="text-sm">
            Chief Complaint Message:{" "}
            <span className="font-bold">{record.chiefComplaintMessage}</span>
          </p>
        )}
        <p className="text-sm">
          Frame of Interest:{" "}
          <span className="font-bold">{record.frameOfInterest}</span>
        </p>
        <p className="text-sm">
          History of Illness:{" "}
          <span className="font-bold">{record.historyOfIllness}</span>
        </p>
      </div>

      <div>
        <h3 className="card-title">Vitals</h3>
        <div className="flex flex-row">
          <VitalCard amount={0} index={0} icon={<WeightIcon />} />
          <VitalCard amount={0} index={1} icon={<HeightIcon />} />
          <VitalCard amount={0} index={2} icon={<TemperatureIcon />} />
          <VitalCard amount={0} index={3} icon={<BloodPressureIcon />} />
        </div>
      </div>

      <div>
        <h3 className="card-title">Diagnosis</h3>
        <p className="text-sm">
          Has the patient been treated for a similar condition or had any
          injuries to the same area in the past?{" "}
          <span className="font-bold">{record.hasSimilarCondition}</span>
        </p>
        <p className="text-sm">
          Does the patient have any allergies?{" "}
          <span className="font-bold">{record.hasAllergies}</span>
        </p>
        <p className="text-sm">
          Does the patient undergo any surgical procedure in the past?{" "}
          <span className="font-bold">{record.undergoSurgery}</span>
        </p>
        <p className="text-sm">
          Does the patient currently taking any medication?{" "}
          <span className="font-bold">{record.takingMedication}</span>
        </p>
        {record.takingMedicationMessage.length > 0 && (
          <p className="text-sm">
            Medication type: $
            <span className="font-bold">{record.takingMedicationMessage}</span>
          </p>
        )}
      </div>

      <ImageGallery images={images} position="Left" />
      <ImageGallery images={images} position="Right" />
    </div>
  );
}
