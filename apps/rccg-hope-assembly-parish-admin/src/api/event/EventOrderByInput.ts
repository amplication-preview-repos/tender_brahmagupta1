import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  startTime?: SortOrder;
  updatedAt?: SortOrder;
};
