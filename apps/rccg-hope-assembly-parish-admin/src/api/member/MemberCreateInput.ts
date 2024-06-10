import { AppointmentCreateNestedManyWithoutMembersInput } from "./AppointmentCreateNestedManyWithoutMembersInput";

export type MemberCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutMembersInput;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  profileImageUrl?: string | null;
};
