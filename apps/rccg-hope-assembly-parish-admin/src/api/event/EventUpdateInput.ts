import { LivestreamUpdateManyWithoutEventsInput } from "./LivestreamUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  date?: Date | null;
  description?: string | null;
  endTime?: string | null;
  imageUrl?: string | null;
  livestreams?: LivestreamUpdateManyWithoutEventsInput;
  name?: string | null;
  startTime?: string | null;
};
