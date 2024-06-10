import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type AppointmentCreateInput = {
  date?: Date | null;
  member?: MemberWhereUniqueInput | null;
  time?: string | null;
};
