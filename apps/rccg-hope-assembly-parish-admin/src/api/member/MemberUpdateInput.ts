import { AppointmentUpdateManyWithoutMembersInput } from "./AppointmentUpdateManyWithoutMembersInput";

export type MemberUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutMembersInput;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  profileImageUrl?: string | null;
};
