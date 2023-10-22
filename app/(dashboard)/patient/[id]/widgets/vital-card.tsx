import { ReactNode } from "react";

interface Props {
  index: number;
  amount: number;
  icon: ReactNode;
}

const title = ["Weight", "Height", "Blood Pressure", "Temperature"];
const suffix = ["(kg)", "(cm)", "(°C)", "(mmHg)"];
export default function VitalCard({ index, amount, icon }: Props) {
  return (
    <div className="flex flex-row items-center justify-center border py-2 px-4 space-x-4">
      <div className="w-6 h-6">{icon}</div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm font-bold">{title[index]}</p>
        <p className="text-sm">
          {amount} {suffix[index]}
        </p>
      </div>
    </div>
  );
}
