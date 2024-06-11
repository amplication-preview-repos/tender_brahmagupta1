import { Member } from "../member/Member";

export type Appointment = {
  createdAt: Date;
  date: Date | null;
  id: string;
  member?: Member | null;
  time: string | null;
  updatedAt: Date;
};
