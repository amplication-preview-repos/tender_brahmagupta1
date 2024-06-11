import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type LivestreamUpdateInput = {
  event?: EventWhereUniqueInput | null;
  url?: string | null;
};
