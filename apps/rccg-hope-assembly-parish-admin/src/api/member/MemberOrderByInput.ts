import { SortOrder } from "../../util/SortOrder";

export type MemberOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phoneNumber?: SortOrder;
  profileImageUrl?: SortOrder;
  updatedAt?: SortOrder;
};
