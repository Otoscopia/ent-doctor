import { Status } from "./status-type";

export interface TableRow {
  id: string;
  name: string;
  gender: string;
  status: Status;
  screenedBy: string;
  uploadedAt: string;
}
