import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type LivestreamCreateInput = {
  event?: EventWhereUniqueInput | null;
  url?: string | null;
};
