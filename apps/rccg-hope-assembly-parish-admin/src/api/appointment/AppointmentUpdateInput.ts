import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type AppointmentUpdateInput = {
  date?: Date | null;
  member?: MemberWhereUniqueInput | null;
  time?: string | null;
};
