import { Event } from "../event/Event";

export type Livestream = {
  createdAt: Date;
  event?: Event | null;
  id: string;
  updatedAt: Date;
  url: string | null;
};
