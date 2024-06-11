import { Livestream } from "../livestream/Livestream";

export type Event = {
  createdAt: Date;
  date: Date | null;
  description: string | null;
  endTime: string | null;
  id: string;
  imageUrl: string | null;
  livestreams?: Array<Livestream>;
  name: string | null;
  startTime: string | null;
  updatedAt: Date;
};
