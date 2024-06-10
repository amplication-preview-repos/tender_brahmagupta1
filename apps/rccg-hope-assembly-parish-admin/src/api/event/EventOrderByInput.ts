import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  name?: SortOrder;
  startTime?: SortOrder;
  updatedAt?: SortOrder;
};
