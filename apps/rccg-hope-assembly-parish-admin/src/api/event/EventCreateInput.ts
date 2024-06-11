import { LivestreamCreateNestedManyWithoutEventsInput } from "./LivestreamCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  date?: Date | null;
  description?: string | null;
  endTime?: string | null;
  imageUrl?: string | null;
  livestreams?: LivestreamCreateNestedManyWithoutEventsInput;
  name?: string | null;
  startTime?: string | null;
};
