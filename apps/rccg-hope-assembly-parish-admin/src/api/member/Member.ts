import { Appointment } from "../appointment/Appointment";

export type Member = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  profileImageUrl: string | null;
  updatedAt: Date;
};
