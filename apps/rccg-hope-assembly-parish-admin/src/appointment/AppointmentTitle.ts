import { Appointment as TAppointment } from "../api/appointment/Appointment";

export const APPOINTMENT_TITLE_FIELD = "time";

export const AppointmentTitle = (record: TAppointment): string => {
  return record.time?.toString() || String(record.id);
};
