import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  memberId?: SortOrder;
  time?: SortOrder;
  updatedAt?: SortOrder;
};
